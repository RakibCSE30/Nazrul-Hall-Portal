// src/pages/DashboardPage.js
import React from 'react';
import { Ticket, Calendar, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import TokenCard from '../components/TokenCard';

const DashboardPage = ({
  user,
  tokens,
  tokenCount,
  setTokenCount,
  paymentMethod,
  setPaymentMethod,
  isTimeValid,
  handleCollectToken,
  handleCancelToken,
  handleLogout
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-6xl mx-auto">
        <Navbar user={user} handleLogout={handleLogout} />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Ticket className="text-purple-600" />
              Collect Token
            </h2>

            {!isTimeValid && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-yellow-800">Token Collection Closed</p>
                  <p className="text-yellow-700 text-sm">Tokens can only be collected between 8:00 PM - 10:00 PM</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Tokens</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={tokenCount}
                  onChange={(e) => setTokenCount(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none"
                  disabled={!isTimeValid}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bkash')}
                    disabled={!isTimeValid}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'bkash'
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-300 hover:border-pink-300'
                    } ${!isTimeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="text-center">
                      <div className="bg-pink-500 text-white font-bold text-xl py-2 rounded-lg mb-2">bKash</div>
                      <p className="text-sm text-gray-600">Mobile Payment</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nagad')}
                    disabled={!isTimeValid}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'nagad'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300 hover:border-orange-300'
                    } ${!isTimeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="text-center">
                      <div className="bg-orange-500 text-white font-bold text-xl py-2 rounded-lg mb-2">Nagad</div>
                      <p className="text-sm text-gray-600">Digital Payment</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Token Price:</span>
                  <span className="font-semibold">৳50 each</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-800">Total Amount:</span>
                  <span className="text-purple-600">৳{tokenCount * 50}</span>
                </div>
              </div>

              <button
                onClick={handleCollectToken}
                disabled={!isTimeValid || !paymentMethod}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Collect Token
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Calendar className="text-indigo-600" />
              My Tokens
            </h2>

            {tokens.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Ticket size={64} className="mx-auto mb-4 opacity-30" />
                <p>No tokens collected yet</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {tokens.map((token) => (
                  <TokenCard
                    key={token.id}
                    token={token}
                    handleCancelToken={handleCancelToken}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;