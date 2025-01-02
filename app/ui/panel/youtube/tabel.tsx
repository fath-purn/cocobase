import React from "react";
import Icon from "@mdi/react";
import { mdiFormatListBulleted, } from "@mdi/js";
import clsx from "clsx";

const transactionHistory = [
  {
    id: 1,
    req: "sub",
    total: "900",
    target: "target akun yt",
    status: "Completed",
  },
  {
    id: 2,
    req: "view",
    total: "20/30",
    target: "target akun yt",
    status: "Running",
  },
  {
    id: 3,
    req: "comment",
    total: "44",
    target: "target akun yt",
    status: "Failed",
  },
  {
    id: 4,
    req: "like",
    total: "87",
    target: "target akun yt",
    status: "Pending",
  },
];

export default function TransactionHistory() {
  return (
    <div className="bg-white rounded shadow p-5">
      <div className="flex flex-row items-center gap-3 mb-3">
        <Icon path={mdiFormatListBulleted} size={1} color={"#E85347"} />
        <h2 className="text-lg font-bold">Transaction History</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-sm">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Req</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Target</th>
            <th className="border px-4 py-2">Status</th>
            {/* <th className="border px-4 py-2">Aksi</th> */}
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.id}</td>
              <td className="border px-4 py-2">{transaction.req}</td>
              <td className="border px-4 py-2">{transaction.total}</td>
              <td className="border px-4 py-2">{transaction.target}</td>
              <td className="border px-4 py-2">
                <span className={clsx({
                  'text-green-600': transaction.status === 'Completed',
                  'text-blue-600': transaction.status === 'Running',
                  'text-yellow-600': transaction.status === 'Pending',
                  'text-red-600': transaction.status === 'Failed',
                })}>
                  {transaction.status}
                </span>
              </td>
              {/* <td className="border px-4 py-2">
                <button className="text-blue-500 hover:underline">View</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
