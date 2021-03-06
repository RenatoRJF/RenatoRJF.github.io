import * as React from 'react';
import styled from 'styled-components';

import Brazil from '../../images/icons/flags/brazil.png';
import Netherlands from '../../images/icons/flags/netherlands.png';
import England from '../../images/icons/flags/england.png';
import Portugal from '../../images/icons/flags/portugal.png';

import AngularIcon from '../../images/technologies/angular.png';
import CSS3Icon from '../../images/technologies/CSS3.png';
import HTML5Icon from '../../images/technologies/HTML5.png';
import JavascriptIcon from '../../images/technologies/javascript.png';
import NodeJSIcon from '../../images/technologies/nodejs.png';
import PolymerIcon from '../../images/technologies/polymer.png';
import ReactIcon from '../../images/technologies/react.png';
import TypeScriptIcon from '../../images/technologies/typescript.png';
import CSharpIcon from '../../images/technologies/CSharp.png';
import VueIcon from '../../images/technologies/vue.png';
import JestIcon from '../../images/technologies/jest.png';
import KarmaIcon from '../../images/technologies/karma.png';
import JasmineIcon from '../../images/technologies/jasmine.png';
import GoogleMapsIcon from '../../images/technologies/maps.png';
import D3JSIcon from '../../images/technologies/d3js.png';
import GulpIcon from '../../images/technologies/gulp.png';
import WebpackIcon from '../../images/technologies/webpack.png';
import ReduxIcon from '../../images/technologies/redux.png';

import Vonq from '../../images/companies/vonq.png';
import Alepe from '../../images/companies/alepe.png';
import Alocado from '../../images/companies/alocado.png';
import Jimbo from '../../images/companies/jimbo.png';
import Laudite from '../../images/companies/laudite.png';
import MGplan from '../../images/companies/mgplan.png';
import Planedia from '../../images/companies/planedia.png';
import Spotqa from '../../images/companies/spotqa.png';
import Thales from '../../images/companies/thales.png';
import { FormattedMessage } from 'react-intl';
import { Fragment } from 'react';

type ExperiencesList = {
  id: number;
  companyImage: string;
  country: string;
  companyName: string;
  isCurrent: boolean;
  jobDescription: string;
  technologies: Array<string>;
  period: string;
  role: string;
};

interface ExperiencesProps {
  data: Array<ExperiencesList>;
};

const SingleExperience = styled.div({
  display: 'flex',
  padding: 10,
  paddingTop: 20,
  backgroundColor: '#EAEAEA',
  boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)',
  marginBottom: 30,
});

const ExperienceImage = styled.img({
  maxWidth: 350,
  marginLeft: -40,
});

const SectionBodyDetails = styled.div({
  width: 'calc(100% - 325px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const DetailsTop = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
});

const Title = styled.h4({
  display: 'flex',
  alignItems: 'center',
  fontSize: 25,
  margin: 0,
  marginTop: 5,
  paddingLeft: 10,
  color: '#2A4058',
});

const CurrentJob = styled.span({
  fontSize: 12,
  marginLeft: 30,
  color: '#21BC6F',
});

const Flag = styled.img({
  width: 40,
});

const ExperienceDate = styled.h4({
  width: '100%',
  margin: 0,
  paddingLeft: 14,
  fontSize: 12,
  color: '#2A4058'
});

const Description = styled.p({
  color: '#6F6F6F',
  lineHeight: 1.4,
  textAlign: 'justify',
  margin: 0,
  marginTop: 20,
  paddingLeft: 12
});

const Technologies = styled.div({
  display: 'flex',
  marginBottom: 20,
  marginTop: 20,
  justifyContent: 'flex-end',
});

const SingleTech = styled.div({
  color: '#7E7E7E',
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
});

const TechIcon = styled.img({
  width: 22,
  marginLeft: 20,
  marginRight: 10,
});

const TechLabel = styled.span({});

const Role = styled.span({
  marginLeft: 25,
  color: '#888888',
  opacity: 0.6,
  fontSize: 16,
});

export default function Experiences({ data }: ExperiencesProps): React.ReactElement {
  const companiesImages: any = {
    alepe: Alepe,
    alocado: Alocado,
    jimbo: Jimbo,
    laudite: Laudite,
    mgplan: MGplan,
    planedia: Planedia,
    spotqa: Spotqa,
    thales: Thales,
    vonq: Vonq,
  };

  const countriesImg: any = {
    brazil: Brazil,
    netherlands: Netherlands,
    portugal: Portugal,
    england: England,
  };

  const technImages: any = {
    Vue: VueIcon,
    React: ReactIcon,
    Polymer: PolymerIcon,
    AngularJS: AngularIcon,
    CSS3: CSS3Icon,
    HTML5: HTML5Icon,
    Javascript: JavascriptIcon,
    Nodejs: NodeJSIcon,
    Typescript: TypeScriptIcon,
    CSharp: CSharpIcon,
    Jest: JestIcon,
    Karma: KarmaIcon,
    Jasmine: JasmineIcon,
    Gulp: GulpIcon,
    Webpack: WebpackIcon,
    Redux: ReduxIcon,
    'Google Maps': GoogleMapsIcon,
    'D3.js': D3JSIcon,
  };

  return (
    <>
      {data.map(({ id, companyImage, companyName, country, isCurrent, period, jobDescription, technologies, role }: ExperiencesList) => (
        <SingleExperience key={String(id)}>
          <ExperienceImage src={companiesImages[companyImage]} alt="vonq" />

          <SectionBodyDetails>
            <DetailsTop>
              <Title>
                {companyName} 
                
                <Role>{role}</Role>
                
                {isCurrent && <CurrentJob><FormattedMessage id="current-job" /></CurrentJob>}
              </Title>

              <Flag src={countriesImg[country]} alt="brazil" />

              <ExperienceDate>{period}</ExperienceDate>

              <Description>{jobDescription}</Description>
            </DetailsTop>

            <Technologies>
              <SingleTech>
                {technologies.map(tech => 
                  <Fragment key={tech}>
                    <TechIcon src={technImages[tech]} alt={tech} /> 
                    <TechLabel>{tech}</TechLabel>
                  </Fragment>
                )}
              </SingleTech>
            </Technologies>
          </SectionBodyDetails>
        </SingleExperience>
      ))}
    </>
  );
}