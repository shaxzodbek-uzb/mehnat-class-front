
export const users = 
{
    items: [

        { username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
        { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
        { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
        { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-info'},
        { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
        { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
        { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
        { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
        { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
        { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
        { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
        { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
        { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}

    ],
    fields: [
        { key: 'username', _style:'min-width:200px' },
        'registered',
        { key: 'role', _style:'min-width:100px;' },
        { key: 'status', _style:'min-width:100px;' },
        { 
          key: 'show_details', 
          label: '', 
          _style: 'width:1%', 
          sorter: false, 
          filter: false
        }
      ]
};

export const table = {
      items: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      fields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
};