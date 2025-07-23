export const isNullUndefinedOrEmpty=(value: any): boolean =>{
  
    return (
      value === null || value === 'null' ||
      value === undefined || value === 'undefined' ||
      (typeof value === 'string' && value.trim().length === 0) || 
      (typeof value === 'object' && value !== null && Object.keys(value).length === 0)
    );
  }