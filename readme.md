### About Employee Tracker

Click the GIF to watch a video on the installation and use (no audio) of Employee Tracker:

[![./images/preview.gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a4c3dae5-874f-4806-8d3c-5436b75e2680.gif?ClientID=vimeo-core-prod&Date=1643678177&Signature=4d8d58e4f2d3f7a8937d71c0199c72d4f170f84a)](https://vimeo.com/673034450/650fcbd99f)

<details>
<summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-updates">Future Updates</a></li>
  </ol>
</details>

## Description

Employee Tracker allows you to access an employee database and view various tables within it.

## Built With

This application was built with MySQL2, Inquirer, and JavaScript.

## Installation

Node.js installation is required. After cloning this repository, open the folder containing the server.js file in your command line application. Then run 'npm i'. This will install inquirer and mysql2.

![screenshot](./images/screen1.png)

Log into MySQL. 

![screenshot](./images/screen2.png)

Run db/schema.sql 

![screenshot](./images/screen3.png)

and then db/seeds.sql.

![screenshot](./images/screen4.png)

This will create the employees database and seed it with values.

## Usage

After quitting MySQL, run the command line 'node server.js'. You will see a message greeting you and present you with four choices. The first three will allow you to view specific tables. Use the arrows keys to select and enter to choose. After viewing a table, you will be asked again what you would like to do. Choosing the last option will exit you out of the application.

![screenshot](./images/screen5.png)

## Future Updates

<ul>
  <li>Add, remove, and update values within the tables</li>
  <li>Join tables so certain id's are represented by their specific values</li>
  <li>Implement Express</li>
  <li>Use environment variable</li>
</ul>

