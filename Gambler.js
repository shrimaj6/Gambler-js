//UC1
const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;

let NO_OF_BETS = 100;// Assume 100 bets played every day
//margin = 50%
let upper_margin = 0.5*STAKE_AMOUNT;
let lower_margin = -0.5*STAKE_AMOUNT;
let total_amount_won_lost = 0;
function GamblingGame()
{
    // console.log("*****UC1******");
    // console.log("Stake amount is :" ,STAKE_AMOUNT);
    // console.log("Betting amount is :" ,BETTING_AMOUNT);

    // console.log("*****UC2******");
    // let checkVal = Math.floor(Math.random() * 10) % 3;

    //     if (checkVal > 0.5)
    //     {
    //         console.log("The Gambler wins the bet.");
    //     }
    //     else if (checkVal <= 0.5)
    //     {
    //         console.log("The Gambler loses the bet.");
    //     }
    // console.log("*****UC3******");
    // let margin_perfect = 0;
    // const upper_margin = STAKE_AMOUNT + margin_perfect*STAKE_AMOUNT/100;
    // const lower_margin = STAKE_AMOUNT - margin_perfect*STAKE_AMOUNT/100;
    // const available_amount = STAKE_AMOUNT;
    // while ((available_amount < upper_margin) && (available_amount > lower_margin))
    // {
    //     let checkVal = Math.floor(Math.random() * 10) % 3;
    //     if (checkVal > 0.5)
    //     {
    //         available_amount += BETTING_AMOUNT;
    //     }
    //     else if (checkVal <= 0.5)
    //     {
    //         available_amount -= BETTING_AMOUNT;
    //     }
    // }
    //   console.log("The gambler resigns for the day after he has $"
    //         + available_amount + " with him.");
    
    
    // console.log("*****UC4******");
    //     // Game played for 20 days
    //     for (var i=0;i<=20;i++)
    //     {
    //         let daily_amount_won_lost = 0;
    //         var bets_played = 0;

    //         // Everyday game stops at 50% margin
    //         while ((daily_amount_won_lost < upper_margin) && (daily_amount_won_lost > lower_margin)
    //                 && (bets_played < NO_OF_BETS)){
    //             let random = Math.floor(Math.random() * 10) % 3;
    //             bets_played++;

    //             if (random > 0.5)
    //             {
    //                 daily_amount_won_lost += BETTING_AMOUNT;
    //             }
    //             else if (random <= 0.5)
    //             {
    //                 daily_amount_won_lost -= BETTING_AMOUNT;
    //             }
    //         }
    //         total_amount_won_lost += daily_amount_won_lost;
    //     }
    //         //Print total amount won or last in 20 days
    //     if (total_amount_won_lost > 0)
    //     {
    //         console.log("The total amount won in 20 days = "+ total_amount_won_lost);
    //     }
    //     else if (total_amount_won_lost == 0)
    //     {
    //         console.log("There is no net gain in last 20 days");
    //     }
    //     else if (total_amount_won_lost < 0)
    //     {
    //         console.log("The total amount lost in last 20 days = "+ Math.abs(total_amount_won_lost));
    //     }

        //        console.log("*****UC5******");
        // for (var i=1;i<31;i++)
        // {
        //     let daily_amount_won_lost = 0;
        //     let bets_played = 0;

        //     // Everyday game stops at 50% margin or before 100 bets, whichever comes earlier
        //     while ((daily_amount_won_lost < upper_margin) && (daily_amount_won_lost > lower_margin)
        //             && (bets_played < NO_OF_BETS))
        //     {
        //         let checkVal = Math.floor(Math.random() * 10) % 3;
        //         bets_played++;
        //         //check whether he wins or loses the bet
        //         if (checkVal > 0.5)
        //         {
        //             daily_amount_won_lost += BETTING_AMOUNT;
        //         }
        //         else if (checkVal <= 0.5)
        //         {
        //             daily_amount_won_lost -= BETTING_AMOUNT;
        //         }
        //     }

        //     // Print total amount won or last on this day
        //     if (daily_amount_won_lost > 0)
        //     {
        //         console.log("The amount won on day "+ i + " = $"+daily_amount_won_lost);
        //     }
        //     else if (daily_amount_won_lost == 0)
        //     {
        //         console.log("There is no net gain or loss on day "+ i);
        //     }
        //     else if (daily_amount_won_lost < 0)
        //     {
        //         console.log("The amount lost on day "+ i + " = $" + Math.abs(daily_amount_won_lost));
        //     }
        // }
        console.log("*****UC6:Luckiest and unluckiest day******");
        let luck_day = 0;
        let luck_day_amt = 0;
        let unluck_day = 0;
        let unluck_day_amt = 0;
        // Game played for a month
        for (var i=1;i<31;i++)
        {
            let daily_amount_won_lost = 0;
            let bets_played = 0;

            // Everyday game stops at 50% margin or before 100 bets, whichever comes earlier
            while ((daily_amount_won_lost < upper_margin) && ( daily_amount_won_lost > lower_margin)
                    && (bets_played < NO_OF_BETS))
            {
                let checkVal = Math.floor(Math.random() * 10) % 3;
                bets_played++;
                //check whether he wins or loses the bet
                if (checkVal>0.5)
                {
                    daily_amount_won_lost += BETTING_AMOUNT;
                }
                else if (checkVal<=0.5)
                {
                    daily_amount_won_lost -= BETTING_AMOUNT;
                }
            }
            // Compare for the lucky and unlucky day
            if (luck_day_amt < daily_amount_won_lost)
            {
                luck_day_amt = daily_amount_won_lost;
                luck_day = i;
            }
            if (unluck_day_amt > daily_amount_won_lost)
            {
                unluck_day_amt = daily_amount_won_lost;
                unluck_day = i;
            }
        }
        // Print luckiest and unluckiest days and the amounts won or last on that day
        console.log("The luckiest day for gambler is "+ luck_day +
                "th day, on which he won $"+luck_day_amt);
        console.log(" And the unluckiest day for gambler is "+ unluck_day +
                "th day, on which he lost $"+Math.abs(unluck_day_amt));

        // console.log("*****UC7:if wins should he play or not******");
        // // Game played for 30 days
        // for (var i=1;i<31;i++)
        // {
        //     let daily_amount_won_lost = 0;
        //     let bets_played = 0;

        //     // Everyday game stops at 50% margin or if number of bets exceed 100
        //     while ((daily_amount_won_lost < upper_margin) && (daily_amount_won_lost > lower_margin)
        //             && (bets_played < NO_OF_BETS))
        //     {
        //         let checkVal = Math.floor(Math.random() * 10) % 3;
        //         bets_played++;

        //         if (checkVal > 0.5)
        //         {
        //             daily_amount_won_lost += BETTING_AMOUNT;
        //         }
        //         else if (checkVal <= 0.5)
        //         {
        //             daily_amount_won_lost -= BETTING_AMOUNT;
        //         }
        //     }
        //     // total amount won or lost in a month
        //     total_amount_won_lost += daily_amount_won_lost;
        // }

        // // If he has won in last month
        // if (total_amount_won_lost > 0)
        // {
        //     // Whether he should play or not
        //     let checkVal1 = Math.floor(Math.random() * 10) % 3;

        //     // He should play further
        //     if (checkVal1 > 0.5)
        //     {
        //         console.log("The gambler has won $"+ total_amount_won_lost+
        //                 " last month and he should play in this month too");
        //     }
        //     // He should not play further
        //     else if (checkVal1 <= 0.5)
        //     {
        //         console.log("The gambler has won $"+ total_amount_won_lost+
        //                 " last month and he should stop gambling now.");
        //     }
        // }
        // // If he has lost in last month
        // else if (total_amount_won_lost <= 0)
        // {
        //     console.log("The gambler has lost in last month $"
        //             + Math.abs(total_amount_won_lost)+
        //             " and to avoid further losses he should stop playing now.");
        // }
    
    }
GamblingGame()