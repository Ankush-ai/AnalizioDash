import React from 'react';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';
import { BsKanban, BsCartDash} from 'react-icons/bs';

export const menuItems = [
    {
        id: 1,
        title: "Home",
        name: "",
        icon: <HiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Employees",
        name: "employees",
        icon: <FaUsers className='icon' />,
    },
    {
        id: 3,
        title: "Customers",
        name: "customers",
        icon: <HiOutlineUsers className='icon' />,
    },
    {
        id: 4,
        title: "Kanban",
        name: "kanban",
        icon: <BsKanban className='icon' />,
    },
    {
        id: 5,
        title: "Orders",
        name: "orders",
        icon: <BsCartDash className='icon' />,
    },
    {
        id:6,
        title: "Charts",
        name: "charts",
        icon: <IoStatsChartSharp className='icon' />,
    },
]

export const customersColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90, headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'orderStatus',
      headerName: 'Order Status',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'customerId',
      headerName: 'Customer Id',
      type: 'number',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    }
  ];

export const customersRows = [

    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, orderStatus: 'Active', customerId: 103, location: 'USA' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, orderStatus: 'Completed', customerId: 104, location: 'India' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, orderStatus: 'Pending', customerId: 105, location: 'India' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, orderStatus: 'Active', customerId: 106, location: 'USA' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 24, orderStatus: 'Completed', customerId: 107, location: 'France' },
    { id: 6, lastName: 'Melisandre', firstName: 'Ryan', age: 178, orderStatus: 'Pending', customerId: 108, location: 'USA' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, orderStatus: 'Completed', customerId: 109, location: 'Canada' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, orderStatus: 'Active', customerId: 110, location: 'Uk' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, orderStatus: 'Completed', customerId: 112, location: 'Australia' },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35, orderStatus: 'Active', customerId: 113, location: 'USA' },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42, orderStatus: 'Completed', customerId: 114, location: 'India' },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45, orderStatus: 'Pending', customerId: 115, location: 'India' },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16, orderStatus: 'Active', customerId: 116, location: 'USA' },
    { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: 24, orderStatus: 'Completed', customerId: 117, location: 'France' },
    { id: 15, lastName: 'Melisandre', firstName: 'Ryan', age: 178, orderStatus: 'Pending', customerId: 118, location: 'USA' },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44, orderStatus: 'Completed', customerId: 119, location: 'Canada' },
    { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36, orderStatus: 'Active', customerId: 120, location: 'Uk' },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65, orderStatus: 'Completed', customerId: 122, location: 'Australia' },
    { id: 19, lastName: 'Snow', firstName: 'Jon', age: 35, orderStatus: 'Active', customerId: 123, location: 'USA' },
    { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 42, orderStatus: 'Completed', customerId: 124, location: 'India' },
    { id: 21, lastName: 'Lannister', firstName: 'Jaime', age: 45, orderStatus: 'Pending', customerId: 125, location: 'India' },
    { id: 22, lastName: 'Stark', firstName: 'Arya', age: 16, orderStatus: 'Active', customerId: 126, location: 'USA' },
    { id: 23, lastName: 'Targaryen', firstName: 'Daenerys', age: 24, orderStatus: 'Completed', customerId: 127, location: 'France' },
    { id: 24, lastName: 'Melisandre', firstName: 'Ryan', age: 178, orderStatus: 'Pending', customerId: 128, location: 'USA' },
    { id: 25, lastName: 'Clifford', firstName: 'Ferrara', age: 44, orderStatus: 'Completed', customerId: 129, location: 'Canada' },
    { id: 26, lastName: 'Frances', firstName: 'Rossini', age: 36, orderStatus: 'Active', customerId: 130, location: 'Uk' },
    { id: 27, lastName: 'Roxie', firstName: 'Harvey', age: 65, orderStatus: 'Completed', customerId: 132, location: 'Australia' },
  ];
