/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import ArrowRight16 from '@carbon/icons-react/lib/arrow--right/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';
import { breakpoints } from '@carbon/layout';

import { Column, Row } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../../.storybook';
import { carbonPrefix } from '../../../globals/namespace';

import {
  ActionBar,
  ActionBarItems,
  Button,
  CardModule,
  CardModuleAction,
  CardModuleCard,
  ICA as ICAComponent,
  ICAModule,
  ICAModuleICA,
  IconButtonBar,
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
  Title,
} from '../../..';

import storyDescription from '../stories';

const setDescription = ({ displayName }, url) => ({
  info: `${storyDescription}
- [Learn more](${url}) about how to use the '${displayName}'`,
});

const card = () => (
  <CardModule>
    <Title>Summary</Title>
    <Title className={`${carbonPrefix}type-productive-heading-01`} element="h3">
      Sub-section title
    </Title>
    <ActionBar>
      <Button kind="ghost" renderIcon={Filter16}>
        Action
      </Button>
      <ActionBarItems>
        <IconButtonBar
          actions={[
            {
              label: 'Search',
              renderIcon: Search16,
            },
            {
              label: 'Filter',
              renderIcon: Filter16,
            },
            {
              label: 'View',
              renderIcon: View16,
            },
          ]}
          size="md"
        />
      </ActionBarItems>
    </ActionBar>
    <Row>
      {new Array(6).fill().map((item = 'cardModuleCard', index) => {
        const key = `${item}__${index}`;

        return (
          <Column key={key}>
            <CardModuleCard>
              <SummaryCard>
                <SummaryCardHeader title="Label" />
                <SummaryCardBody>
                  <Title>Title</Title>
                </SummaryCardBody>
                <SummaryCardFooter>
                  <SummaryCardAction>Scan now</SummaryCardAction>
                </SummaryCardFooter>
              </SummaryCard>
            </CardModuleCard>
          </Column>
        );
      })}
    </Row>
    <Row>
      <Column>
        <CardModuleAction>
          <Button kind="ghost" renderIcon={ArrowRight16}>
            Action
          </Button>
        </CardModuleAction>
      </Column>
    </Row>
  </CardModule>
);

card.parameters = setDescription(
  CardModule,
  'https://ibm.box.com/s/ery5j69q2a20o788s2f7mnjmoew7k9ka'
);

const ICA = () => (
  <ICAModule>
    <Title>Summary</Title>
    <Row>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Reviews complete" value={300} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Approved" value={241} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Rejected" value={28} />
        </Column>
      </ICAModuleICA>
    </Row>
  </ICAModule>
);

ICA.parameters = setDescription(
  ICAModule,
  'https://ibm.box.com/s/f0orv16ivr46ukwd6jn0hmuw0slxfj2c'
);

export default meta(patterns('LayoutModules [Beta]'), storyDescription, null, [
  story => <div style={{ width: breakpoints.lg.width }}>{story()}</div>,
]);

export { card, ICA };