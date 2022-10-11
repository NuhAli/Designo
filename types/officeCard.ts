export interface IOfficeProps {
  id: string;
  imageTablet: string;
  imageDesktop: string;
  name: string;
  address: {
    office: string;
    street: string;
    city: string;
  };
  contact: {
    phoneNumber: string;
    mobileNumber: string;
  };
}
