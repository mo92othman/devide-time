export function calculateTotalAmount(users) {
  return users.reduce((total, user) => total + user.amount, 0);
}

export const calculateTransactions = (users) => {
  const transactions = [];

  // Step 1: Calculate Balances
  const totalAmount = calculateTotalAmount(users);
  const averageBalance = totalAmount / users.length;

  const balances = users.map((user) => ({
    id: user.id,
    balance: user.amount - averageBalance,
  }));

  // Step 2: Identify Pairs
  const positiveBalances = balances.filter((balance) => balance.balance > 0);
  const negativeBalances = balances.filter((balance) => balance.balance < 0);

  // Step 3: Calculate Transactions
  for (const debtor of negativeBalances) {
    for (const creditor of positiveBalances) {
      const amountToTransfer = Math.min(
        Math.abs(debtor.balance),
        creditor.balance,
      );

      if (amountToTransfer > 0) {
        transactions.push({
          from: debtor.id,
          to: creditor.id,
          amount: amountToTransfer,
        });

        // Update balances after the transaction
        debtor.balance += amountToTransfer;
        creditor.balance -= amountToTransfer;

        // Remove the creditor from the positive balances if their balance becomes zero
        if (creditor.balance === 0) {
          positiveBalances.splice(positiveBalances.indexOf(creditor), 1);
        }
      }
    }
  }

  return transactions;
};
