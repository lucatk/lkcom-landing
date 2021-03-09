import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import feather, { FeatherAttributes } from 'feather-icons';

const FeatherIcon = ({ name, ...attrs }) => {
  const featherString = useMemo(() => feather.icons[name].toSvg(attrs), [name, attrs]);
  return <div dangerouslySetInnerHTML={{ __html: featherString }} />;
};

FeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FeatherIcon;
