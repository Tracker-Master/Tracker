import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledAboutUs,
  DevsContainer,
  DevsCards,
  ImageContainer,
  LinksContainer,
  FooterActions,
} from 'Styles/pages/AboutUsStyles';

// import { FooterActions } from 'Components/FooterActions';

export const AboutUs = () => {
  const developers = [
    {
      id: 1,
      name: 'Juan Jose Mayorga',
      picture:
        'https://avatars.githubusercontent.com/u/33362582?s=460&u=3d38fd83ba1b550cc008e34aefcaadd340775e5f&v=4',
      job: 'Frontend Developer',
      nationality: {
        name: 'Mexican',
        flagImage:
          'https://assets-juanjosemayorga-website.s3.amazonaws.com/flags-icons/mexico.svg',
      },
      github: 'https://github.com/juanjosemayorga',
      linkedIn: 'https://www.linkedin.com/in/juanjosedev/',
      twitter: '',
    },
    {
      id: 2,
      name: 'Andrés Ricaño',
      picture:
        'https://avatars.githubusercontent.com/u/56327692?s=400&u=663b1ae00c9b255759de8f4fe67465fb1eef1bb2&v=4',
      job: 'Frontend Developer',
      nationality: {
        name: 'Mexican',
        flagImage:
          'https://assets-juanjosemayorga-website.s3.amazonaws.com/flags-icons/mexico.svg',
      },
      github: 'https://github.com/aricanoMX',
      linkedIn: 'https://www.linkedin.com/in/aricanomx/',
      twitter: '',
    },
    {
      id: 3,
      name: 'Milena Castro',
      picture:
        'https://avatars.githubusercontent.com/u/62910143?s=460&u=7c18ca3180224865c962f43269ab932c0332e8a3&v=4',
      job: 'Frontend Developer',
      nationality: {
        name: 'Colombian',
        flagImage:
          'https://assets-juanjosemayorga-website.s3.amazonaws.com/flags-icons/colombia.svg',
      },
      github: 'https://github.com/DevMilenaCastro',
      linkedIn: 'https://www.linkedin.com/in/devmilenacastro/',
      twitter: '',
    },
    {
      id: 4,
      name: 'Luis Alberto Colunga Perez',
      picture:
        'https://avatars.githubusercontent.com/u/66395776?s=460&u=e3a46c2b925065c619aff855e989d93f31c6ac50&v=4',
      job: 'Frontend Developer',
      nationality: {
        name: 'Mexican',
        flagImage:
          'https://assets-juanjosemayorga-website.s3.amazonaws.com/flags-icons/mexico.svg',
      },
      github: 'https://github.com/luiscolungaperez',
      linkedIn: 'https://www.linkedin.com/in/luis-colunga-perez/',
      twitter: '',
    },
  ];
  return (
    <StyledAboutUs>
      <DevsContainer>
        {developers.map((dev) => (
          <DevsCards key={dev.id}>
            <ImageContainer>
              <img src={dev.picture} alt={`Image of ${dev.name}`} />
              <img
                src={dev.nationality.flagImage}
                alt={`Image of ${dev.nationality.name}`}
              />
            </ImageContainer>
            <h1>{dev.name}</h1>
            <p>{dev.job}</p>
            <LinksContainer>
              <a href={dev.github}>
                <img
                  src="https://assets-juanjosemayorga-website.s3.amazonaws.com/social-media-icons/github-logo.svg"
                  alt={`Github of ${dev.name}`}
                />
              </a>
              <a href={dev.linkedIn}>
                <img
                  src="https://assets-juanjosemayorga-website.s3.amazonaws.com/social-media-icons/linkedin.svg"
                  alt={`LinkedIn of ${dev.name}`}
                />
              </a>
              <a href={dev.twitter}>
                <img
                  src="https://assets-juanjosemayorga-website.s3.amazonaws.com/social-media-icons/twitter.svg"
                  alt={`Twitter of ${dev.name}`}
                />
              </a>
            </LinksContainer>
          </DevsCards>
        ))}
      </DevsContainer>
      <FooterActions>
        <Link to="/">
          <picture>
            <img
              src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/icons/ico_home-24px.svg"
              alt="Logo"
            />
            <figcaption>Home</figcaption>
          </picture>
        </Link>
      </FooterActions>
    </StyledAboutUs>
  );
};
