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
          'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
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
          'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
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
          'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
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
          'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
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
              <picture>
                <img src={dev.picture} alt={`Image of ${dev.name}`} />
                <img
                  src={dev.nationality.flagImage}
                  alt={`Image of ${dev.nationality.name}`}
                />
              </picture>
            </ImageContainer>
            <h1>{dev.name}</h1>
            <p>{dev.job}</p>
            <LinksContainer>
              <a href={dev.github}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
                  alt={`Github of ${dev.name}`}
                />
              </a>
              <a href={dev.linkedIn}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTIgMTZoLTJ2LTZoMnY2em0tMS02Ljg5MWMtLjYwNyAwLTEuMS0uNDk2LTEuMS0xLjEwOSAwLS42MTIuNDkyLTEuMTA5IDEuMS0xLjEwOXMxLjEuNDk3IDEuMSAxLjEwOWMwIC42MTMtLjQ5MyAxLjEwOS0xLjEgMS4xMDl6bTggNi44OTFoLTEuOTk4di0yLjg2MWMwLTEuODgxLTIuMDAyLTEuNzIyLTIuMDAyIDB2Mi44NjFoLTJ2LTZoMnYxLjA5M2MuODcyLTEuNjE2IDQtMS43MzYgNCAxLjU0OHYzLjM1OXoiLz48L3N2Zz4="
                  alt={`LinkedIn of ${dev.name}`}
                />
              </a>
              <a href={dev.twitter}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptNi4wNjYgOS42NDVjLjE4MyA0LjA0LTIuODMgOC41NDQtOC4xNjQgOC41NDQtMS42MjIgMC0zLjEzMS0uNDc2LTQuNDAyLTEuMjkxIDEuNTI0LjE4IDMuMDQ1LS4yNDQgNC4yNTItMS4xODktMS4yNTYtLjAyMy0yLjMxNy0uODU0LTIuNjg0LTEuOTk1LjQ1MS4wODYuODk1LjA2MSAxLjI5OC0uMDQ5LTEuMzgxLS4yNzgtMi4zMzUtMS41MjItMi4zMDQtMi44NTMuMzg4LjIxNS44My4zNDQgMS4zMDEuMzU5LTEuMjc5LS44NTUtMS42NDEtMi41NDQtLjg4OS0zLjgzNSAxLjQxNiAxLjczOCAzLjUzMyAyLjg4MSA1LjkyIDMuMDAxLS40MTktMS43OTYuOTQ0LTMuNTI3IDIuNzk5LTMuNTI3LjgyNSAwIDEuNTcyLjM0OSAyLjA5Ni45MDcuNjU0LS4xMjggMS4yNy0uMzY4IDEuODI0LS42OTctLjIxNS42NzEtLjY3IDEuMjMzLTEuMjYzIDEuNTg5LjU4MS0uMDcgMS4xMzUtLjIyNCAxLjY0OS0uNDUzLS4zODQuNTc4LS44NyAxLjA4NC0xLjQzMyAxLjQ4OXoiLz48L3N2Zz4="
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
