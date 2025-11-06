// src/components/TokenCard.js
import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const TokenCard = ({ token, handleCancelToken }) => {
  return (
    <div
      className={`p-4 rounded-xl border-2 transition-all ${
        token.status === 'active' ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {token.status === 'active' ? (
              <CheckCircle className="text-green-600" size={20} />
            ) : (
              <XCircle className="text-red-600" size={20} />
            )}
            <span className="font-semibold text-gray-800 capitalize">{token.status}</span>
          </div>
          <p className="text-sm text-gray-600">Token ID: {token.id}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg text-gray-800">৳{token.amount}</p>
          <p className="text-xs text-gray-500 uppercase">{token.paymentMethod}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          {token.date}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          {token.time}
        </div>
      </div>
      {token.status === 'active' && (
        <button
          onClick={() => handleCancelToken(token.id)}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
        >
          Cancel Token
        </button>
      )}
    </div>
  );
};

export default TokenCard;