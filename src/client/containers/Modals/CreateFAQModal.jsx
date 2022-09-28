import React from 'react';
import BaseModal from 'containers/Modals/BaseModal';
const FAQMOdel = ({ children }) => {
  return <BaseModal large={false}>{children}</BaseModal>;
};
export default FAQMOdel;
