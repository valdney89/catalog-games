# Gameslist

This project was created as an testing and has the requirements:

- Use Angular 12+ and Angular Material.
- Have a way to persist data. You may use localStorage or whatever you please.
- Have some games already seeded.
- In "Console", use a dropdown with at least the current generation consoles (XBOX ONE, PS4, NINTENDO SWITCH).
- Use a datepicker for "date of completion".
- In the game list, to show how old is that game (in the example above we would see '16 years old')
- Provide instructions on how to run in a README.md file.
- Save only. No need for updating.
- Have Unit Tests

## Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

To install the Angular CLI, open a terminal window and run the following command:

```bash
npm install -g @angular/cli@13.1.2
```

You need download a recent stable version of [Node.js](https://nodejs.org/pt-br/download/)

To clone this project you can use the git basch and use the command:

```bash
git clone https://github.com/valdney89/catalog-games.git
```

After Clone this project you need install the dependecies, use the command:

```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running JSON Server

This project use JSON server to persist the data, you can start JSON serve:

```bash
json-server --watch db.json
```

Now if you go to http://localhost:3000/, you'll see the catalogs and consoles datas.
