import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const DictionaryRow = props => (
  <Table.Row>
    <Table.Cell>{props.dictionary.id}</Table.Cell>
    <Table.Cell>{props.dictionary.indonesia}</Table.Cell>
    <Table.Cell>{props.dictionary.english}</Table.Cell>
    <Table.Cell>{props.dictionary.sumber}</Table.Cell>
    <Table.Cell>{props.dictionary.keterangan}</Table.Cell>
    <Table.Cell textAlign="center">
      <Button
        onClick={() => props.addFavorite(props.dictionary)}
        color={props.dictionary.suka ? 'google plus' : 'twitter'}
        icon={props.dictionary.suka ? 'heart' : 'heart outline'}
      />
    </Table.Cell>
  </Table.Row>
);

DictionaryRow.propTypes = {
  kamus: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
};
