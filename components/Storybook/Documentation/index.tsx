import React, { ReactNode } from 'react';

import { uuid } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { InlineCode, Link, Text } from '@components/DataDisplay';

export interface DataElement {
  prop: string;
  types: Array<string>;
  optional?: boolean;
}

interface Props {
  title: string;
  description: string;
  playgroundLink: string;
  data: Array<DataElement>;
  getComponent?: (type: string, e: DataElement) => ReactNode;
}

const Documentation = ({
  title,
  description,
  playgroundLink,
  data,
  getComponent,
}: Props): JSX.Element => (
  <Container align="center">
    <Container>
      <Container>
        <Text variant="h1">{title}</Text>
        <Text variant="h5">
          {description}
          &nbsp;
          <Link href={playgroundLink}>Try it yourself!</Link>
        </Text>
      </Container>
      {data.map((e) => (
        <React.Fragment key={uuid()}>
          <Container row justify="space-between">
            {e.optional ? (
              <Container gap={0} row justify="flex-start">
                <Text variant="h4">{e.prop}</Text>
                <Text variant="small">&nbsp;(Optional)</Text>
              </Container>
            ) : (
              <Text variant="h4">{e.prop}</Text>
            )}
            <Spacer size="large" />
            <InlineCode>{e.types.join(' | ')}</InlineCode>
          </Container>
          {e.types.length > 1 && getComponent && (
            <>
              <Container gap={0} row justify="flex-start">
                {e.types.map((type) => getComponent(type, e))}
              </Container>
              <Spacer size="small" />
            </>
          )}
        </React.Fragment>
      ))}
    </Container>
  </Container>
);

export default Documentation;
