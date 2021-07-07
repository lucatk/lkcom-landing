import React from 'react';
import styled from 'styled-components';

import * as Icons from 'react-feather';

import Layout from '../components/layout';
import PersonalPhoto from '../components/PersonalPhoto';
import SEO from '../components/seo';

import socialLinks from '../../content/social-links.json';

let Name;

const HoverContainer = styled.div`
  transition: transform 250ms;
  &:hover {
    transform: translateY(-5px);
  }
`;

const PersonalPhotoContainer = styled.div`
  width: 100%;
  transform-origin: center left;
  transition: transform 250ms, filter 250ms, opacity 150ms;

  &:hover {
    transform: scale(1.2);
  }
  ${HoverContainer}:hover &:not(:hover) {
    opacity: 0.4;
    filter: grayscale(1);
  }
  ${Name}:hover ~ & {
    transform: translateY(-5px);
  }
`;
const PersonalPhotoBorder = styled.div`
  width: 100%;
  max-width: 240px;
  max-height: 240px;
  margin: 10px 0;
  padding: 6px;

  border: 4px solid #3c3c3c;
  @media (prefers-color-scheme: dark) {
    border-color: #cfcfcf;
  }
`;

Name = styled.h1`
  margin: 0;
  cursor: default;
  transform: translateY(5px);
  transform-origin: center left;
  transition: transform 250ms, opacity 150ms;

  &:hover {
    transform: scale(1.2) translateY(5px);
  }
  ${HoverContainer}:hover &:not(:hover) {
    opacity: 0.4;
  }
  ${PersonalPhotoContainer}:hover ~ & {
    transform: translateY(30px);
  }
`;

const SocialMenu = styled.div`
  margin: 30px 0;
  transform: translateY(5px);
  transform-origin: center left;
  transition: transform 250ms, opacity 150ms;

  &:hover {
    transform: scale(1.2) translateY(5px);
  }
  ${HoverContainer}:hover &:not(:hover) {
    opacity: 0.4;
  }
  ${PersonalPhotoContainer}:hover ~ & {
    transform: translateY(30px);
  }
  ${Name}:hover ~ & {
    transform: translateY(10px);
  }
`;

const SocialLink = styled.div`
  display: inline-block;
  margin: 0 12px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const _SocialIcon = ({ Icon, ...attrs }) => <Icon size={32} color="#3c3c3c" {...attrs} />;
const SocialIcon = styled(_SocialIcon)`
  ${SocialLink} a:hover & {
    stroke: #BB7E5D;
    cursor: pointer;
  }
  @media (prefers-color-scheme: dark) {
    stroke: #cfcfcf;
  }
`;

const SocialAltText = styled.p`
  position: absolute;
  transition: opacity 100ms;
  opacity: 0;
  cursor: default;
  margin: 0;
  ${SocialLink} a:hover ~ & {
    opacity: 1;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO />
    <HoverContainer>
      <PersonalPhotoContainer>
        <PersonalPhotoBorder>
          <PersonalPhoto />
        </PersonalPhotoBorder>
      </PersonalPhotoContainer>
      <Name>luca killmaier</Name>
      <SocialMenu>
        {Object.entries(socialLinks).map(([key, link]) => (
          <SocialLink key={key}>
            <a href={link.href} target={!link.href.startsWith('mailto:') && '_blank'}>
              <SocialIcon Icon={Icons[link.icon]} alt={link.altText} />
            </a>
            <SocialAltText>{link.altText}</SocialAltText>
          </SocialLink>
        ))}
      </SocialMenu>
    </HoverContainer>
  </Layout>
);

export default IndexPage;
