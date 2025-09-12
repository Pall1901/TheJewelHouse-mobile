import { ActivityIndicator, Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppDimension from '../../../app-res/AppDimension'
import AppColor from '../../../app-res/AppColor'
import AppFontSize from '../../../app-res/AppFontSize'
import AppFontFamily from '../../../app-res/AppFontFamily'
import Icon, { Icons } from '../../../components/Icon/Icons'
import DropdownModal from '../../../components/Dropdown/DropdownModal'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useUser } from '../../../ayncStorage/UserContext'
import { PROD_BASE_URL } from '@env';


interface UploadImageViewProps {
    setImageUrl: (url: string) => void;
     initialUrl?: string;
}

const uploadOptions = [
    { name: 'Select from Gallery', value: 'gallery' },
    { name: 'Click Photo', value: 'camera' },
];

const UploadImageView = ({ setImageUrl,initialUrl }: UploadImageViewProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const { user } = useUser();

    useEffect(() => {
    if (initialUrl) {
      setImageUri(initialUrl);      // show the API image
      setImageUrl(initialUrl);      // send it back to parent so it stays in state
    }
  }, [initialUrl]);

    const requestCameraPermission = async () => {
        const permission = Platform.select({
            ios: PERMISSIONS.IOS.CAMERA,
            android: PERMISSIONS.ANDROID.CAMERA,
        });

        if (!permission) return;

        const result = await check(permission);

        if (result === RESULTS.GRANTED) {
            return true;
        }
        if (result === RESULTS.DENIED) {
            const newResult = await request(permission);
            return newResult === RESULTS.GRANTED;
        }
        if (result === RESULTS.BLOCKED) {
            Alert.alert(
                'Camera Permission',
                'Camera permission is blocked. Please enable it in settings.',
                [{ text: 'OK' }]
            );
            return false;
        }
        return false;
    };


    const handleSelect = (item: any) => {
        setShowDropdown(false);
        if (item.value === 'gallery') {
            pickFromGallery();
        } else if (item.value === 'camera') {
            capturePhoto();
        }
    };

    const pickFromGallery = () => {
        launchImageLibrary({ mediaType: 'photo' }, res => {
            if (res.assets && res.assets.length > 0) {
                uploadImage(res.assets[0]);
            }
        });
    };

    const capturePhoto = async () => {
        const granted = await requestCameraPermission();
        if (!granted) return;

        launchCamera({ mediaType: 'photo', cameraType: 'back', }, res => {
            if (!res.didCancel && res.assets?.length) {
                uploadImage(res.assets[0]);
            }
        });
    };

    const uploadImage = async (image: any) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('userId', user?.id);
        formData.append('image', {
            uri: image.uri,
            name: image.fileName || 'upload.jpg',
            type: image.type || 'image/jpeg',
        });

        try {
            const res = await fetch(`${PROD_BASE_URL}upload/image`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });
            const data = await res.json();
            console.log(data.data.imageUrl, '....');
            setImageUrl(data.data.imageUrl)
            console.log('Image URL sent to parent:', data.data.imageUrl);
            setImageUri(image.uri);
        } catch (err) {
            console.error('Upload failed:', err);
        } finally {
            setLoading(false);
        }
    };


    const handleRemoveImage = () => {
        setImageUri(null);
    };

    return (
        <>
            <TouchableOpacity style={styles.card}
                onPress={() => {
                    if (!loading && !imageUri) setShowDropdown(true);
                }}>
                <View style={{ alignItems: 'center' }}>
                    {loading ? (
                        <ActivityIndicator size="large" color={AppColor.grey71} />
                    ) : imageUri ? (
                        <View>
                            <Image
                                source={{ uri: imageUri }}
                                style={styles.image}
                            />
                            <TouchableOpacity style={styles.crossIcon} onPress={handleRemoveImage}>
                                <Icon
                                    type={Icons.Ionicons}
                                    name={'close-circle'}
                                    size={25}
                                    color={AppColor.red}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <>
                            <Icon
                                type={Icons.Ionicons}
                                size={40}
                                name={'image-sharp'}
                                color={AppColor.grey71}
                            />
                            <Text style={styles.text}>Upload Image</Text>
                        </>
                    )}
                </View>
            </TouchableOpacity>


            <DropdownModal
                actionSheet={showDropdown}
                closeActionSheet={() => setShowDropdown(false)}
                select={handleSelect}
                actionItems={uploadOptions}
            />
        </>
    )
}

export default UploadImageView

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 200,
        backgroundColor: AppColor.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: AppDimension.SPACING_X_10,
        borderWidth: 1,
        borderColor: AppColor.primary
    },
    text: {
        fontSize: AppFontSize.FONT_SIZE_18,
        color: AppColor.grey71,
        fontFamily: AppFontFamily.ManropeBold,
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 8,

    },
    crossIcon: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#fff',
        borderRadius: 14,
        //padding: 2,
    },

})