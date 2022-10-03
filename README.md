## create a NodeJS project that will do the following:
- read a value float/double value (with 18 decimal places) from the env file. i.e peccalaValue= somevalue
- apply the following equation: peccalaValue = (peccalaValue * 2 + 1.5)/ 7.5 (result should be 18 decimal places without any rounding.
- update the env file and call this every 2 minutes.
- save the history of peccalaValue in a csv file along with date/time
- Make sure it is exactly running every 2 minutes

## Requirements
Nodejs v16.15.1 (LTS)

### Commands
Follow these steps to run the application:
- create .env file and copy the key from .env.example. value from problem statement. 
- `npm install` 
- `npm start`

## Result
First, it will delete out.csv, then it will start a cron every 5 seconds, we can change the behaviour in app.js:16 
Cronjob will call calculate:main() function, it has 3 steps
- read the current peccaValue and calculate the new peccaValue
- save new peccaValue to process.env
- modify out.csv with new peccaValue and datetime iso string


