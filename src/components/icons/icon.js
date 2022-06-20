import React from 'react';
import PropTypes from 'prop-types';
import {
  IconBookmark,
  IconMedium,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconFacebook,
  IconResearchGate,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark />;
    case 'Medium':
      return <IconMedium />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Facebook':
      return <IconFacebook />;
    case 'ResearchGate':
      return <IconResearchGate />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
