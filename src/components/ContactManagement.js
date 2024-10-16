import React from 'react';
import { useTable } from 'react-table';
import './ContactManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactManagement = () => {
  const data = React.useMemo(
    () => [
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      { id: '01101', name: 'Chris...', company: 'Grey Fade', address: 'Shell Link...', email: '...', phone: '(702) 555-0102', position: 'CEO', social: [faLinkedin, faTwitter, faFacebook, faInstagram] },
      // Add more data rows here...
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Company Name', accessor: 'company' },
      { Header: 'Address', accessor: 'address' },
      { Header: 'Primary Email', accessor: 'email' },
      { Header: 'Mobile Phone', accessor: 'phone' },
      { Header: 'Position', accessor: 'position' },
      {
        Header: 'Social Media', accessor: 'social', Cell: ({ cell: { value } }) => (
          <div>
            {value.map((icon, index) => (
              <FontAwesomeIcon key={index} icon={icon} className="social-icon" />
            ))}
          </div>
        )
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

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
      </div>

      <table {...getTableProps()} className="contacts-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
