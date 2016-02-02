# DFSCashRegister-Aurelia
An implementation of the DF Studio "cash register" exercise in Aurelia (as a means to try it out). The challenge was given to recent DF Studio dev applicants, described as follows:

> Given a fixed, limited, catalog of items for sale, allow a Checker to quickly process the order of a customer, compute sales tax at 7.2% and display a receipt.
>
> Items for sale:
> - Cabbage: $1.29
> - Chuckit: $7.82
> - Ammo: $.20
> - DVD: $14.77
> - Pants: $34.73
> - Drill: $28.96

Running the app requires npm. If you don't already have it installed, [Get it Here] (https://docs.npmjs.com/getting-started/installing-node).

Use npm to install the modules defined by the `package.json` file:
```
> npm install
```

Then use jspm to install the modules defined by the `config.js` file:
```
> jspm install -y
```

Then, run the app:
```
> gulp serve
```
