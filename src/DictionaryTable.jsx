import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

import { DictionaryPageSizeSelect } from './DictionaryPageSizeSelect.jsx';
import { DictionaryRow } from './DictionaryRow.jsx';
import { DictionaryTableHeader } from './DictionaryTableHeader.jsx';

export const DictionaryTable = props => {
  if (!props.dictionaries) {
    return <React.Fragment />;
  }
  const dictionaryRows = props.dictionaries.map((dictionary, index) => (
    <DictionaryRow key={index} dictionary={dictionary} addFavorite={props.addFavorite} />
  ));
  return (
    <React.Fragment>
      <DictionaryPageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable>
        <DictionaryTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>{dictionaryRows}</Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  );
};

DictionaryTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
