import React, { useEffect, useState } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import './ContactManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Default filter UI
function DefaultColumnFilter({
  column: { filterValue, setFilter, Header },
}) {
  return (
    <input
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value || undefined)}
      placeholder={`Search ${Header}...`}
    />
  );
}

// Global filter UI
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length

  return (
    <input
      value={globalFilter || ""}
      onChange={e => {
        setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search all ${count} records...`}
    />
  )
}

const ContactManagement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('generated.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'first_name' },
      { Header: 'Company Name', accessor: 'organisation_name' },
      { Header: 'Address', accessor: 'contact_address_1' },
      { Header: 'Primary Email', accessor: 'email_work' },
      { Header: 'Mobile Phone', accessor: 'direct_phone' },
      { Header: 'Position', accessor: 'job_name' },
      {
        Header: 'Social Media', accessor: 'social', disableSortBy: true, disableFilters: true, Cell: () => (
          <div>
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </div>
        )
      }
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter, useSortBy);

  return (
    <div className="contact-management">
      <div className="header">
        <div className="tabs">
          <button className="tab active">Contacts</button>
          <button className="tab">Companies</button>
          <button className="tab">HQ Companies</button>
        </div>
        <div className="buttons">
          <button>Saved Search</button>
          <button>Manage Columns</button>
          <button>+ New List</button>
          <button>+ Redeem Contacts</button>
        </div>
      </div>

      <div className="filters">
        <div className="selected-contacts">15 Contacts Selected</div>
        <button>Select All 523</button>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <table {...getTableProps()} className="contacts-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManagement;
