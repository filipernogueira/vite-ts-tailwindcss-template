export enum Tab {
  Account = "account",
  Info = "info",
  Auth = "auth",
  Devices = "devices",
  Platforms = "platforms",
  STUDENT_HUB = "student-hub",
  TUTOR_HUB = "tutor-hub",
  SYSTEM = "system",
}

export interface DeviceInfo {
  deviceOs: string;
  deviceBrowser: string;
  deviceType: string;
  deviceResolution: string;
}

export interface Student {
  email: string;
  fullName: string;
  phoneNumber: string;
  profilePictureUrl: string;
  studentId: number;
  userId: number;
}

export interface User {
  id: number;
  email: string;
  fullName: string;
  username: string;
}

export interface Role {
  roleId: number;
  roleName: string;
}

export interface PhoneNumber {
  phoneNumber: string;
  countryCode: string;
  isPhoneNumberVerified: boolean;
}

interface Ip {
  city: string;
  continent: string;
  country: string;
  district: string;
  infoStatus: number;
  ipAddress: string;
  ipAddressId: number;
  lat: number;
  lon: number;
  regionName: string;
  timezone: string;
  zip: string;
}

export type Device = {
  id: number;
  uniqueDeviceIdentifier: string;
  acceptanceStatus: number;
  deviceBrowser: string;
  deviceOs: string;
  deviceResolution: string;
  deviceType: string;
  ipAddresses: Ip[];
};

export interface Data {
  date: string;
  value: number;
}

export interface Membership {
  id: number;
  name: string;
}

export interface UserMembership {
  id: number;
  startDate: string;
  endDate: string;
  status: string;
  method: string;
  subscriptionId: string;
  userId: number;
  membership: Membership;
  membershipType: {
    id: number;
    name: string;
    duration: number;
    amount: number;
    billingCycle: string;
  };
  transactions: {
    id: number;
    amount: number;
    paidAt: string;
    fileUrlInvoice: string;
    status: string;
  }[];
  actions: {
    id: number;
    date: string;
    type: string;
  }[];
}
