

export enum HttpStatusCode {
  // 1xx Informational Responses
  Continue = 100,
  SwitchingProtocols = 101,

  // 2xx Success
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,

  // 3xx Redirection
  MovedPermanently = 301,
  Found = 302,
  NotModified = 304,

  // 4xx Client Errors
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  CONFLICT = 409,
  SessionExpired = 440,

  // 5xx Server Errors
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  NetworkAuthenticationRequired = 511,
}

export enum OperatingSystemType {
  ANDROID = 'android',
  IOS = 'ios',
}

export enum TabScreen {
  DASHBOARD = 'DASHBOARD',
  QUOTATION = 'QUOTATION',
  ORDERS = 'ORDERS',
  PROFILE = 'PROFILE',
}


export enum ScreenName {
  HOME_SCREEN = 'HomeScreen',
  LOGIN_SCREEN = 'LoginScreen',
  QUOTATION_FORM_SCREEN = 'QuotationFormScreen',
  ORDERS_FORM_SCREEN = 'OrdersFormScreen',
}

export enum GoldPurity {
  GOLD_14 = '14k',
  GOLD_18 = '18k',
}

export enum GoldColor {
  YELLOW = 'Yellow',
  WHITE = 'White',
  ROSE = 'Rose',
}



export enum MessageType {
  NONE = 'none',
  DEFAULT = 'default',
  INFO = 'info',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}

