import { Table } from 'semantic-ui-react';
import React from 'react';

export function DictionaryTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'id' ? props.direction : null}
          onClick={() => props.handleSort('id')}
        >
          #
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'indonesia' ? props.direction : null}
          onClick={() => props.handleSort('indonesia')}
        >
          Indonesia
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'english' ? props.direction : null}
          onClick={() => props.handleSort('english')}
        >
          English
        </Table.HeaderCell>
        <Table.HeaderCell
          width={2}
          sorted={props.column === 'sumber' ? props.direction : null}
          onClick={() => props.handleSort('sumber')}
        >
          Sumber
        </Table.HeaderCell>
        <Table.HeaderCell
          width={2}
          sorted={props.column === 'keterangan' ? props.direction : null}
          onClick={() => props.handleSort('keterangan')}
        >
          Keterangan
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'suka' ? props.direction : null}
          onClick={() => props.handleSort('suka')}
        >
          Suka
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}
