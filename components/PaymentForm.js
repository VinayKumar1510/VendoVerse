'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';

export default function PaymentForm({ cartItems }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paid, setPaid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handlePayment(e) {
    e.preventDefault();

    if (
      cardNumber.length !== 16 ||
      !/^\d+$/.test(cardNumber) ||
      expiry.length !== 5 ||
      cvv.length !== 3 ||
      !/^\d+$/.test(cvv)
    ) {
      alert('Please enter valid card details');
      return;
    }

    setShowSuccess(true);

    setTimeout(() => {
      setPaid(true);
      setShowSuccess(false);
    }, 3000);
  }

  function generatePDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    let y = 20;

    // Company info header
    doc.setFontSize(20);
    doc.setTextColor('#0B3D91');
    doc.setFont('helvetica', 'bold');
    doc.text('VendorVerse Pvt. Ltd.', margin, y);

    y += 8;
    doc.setFontSize(11);
    doc.setTextColor('#333333');
    doc.setFont('helvetica', 'normal');
    doc.text('123 Vendor Street, Cityname, Country', margin, y);

    y += 5;
    doc.text('Phone: +91 79887 22405 | Email: vinaysharaya1@gmail.com', margin, y);

    // Invoice title & date
    y += 15;
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('INVOICE', pageWidth - margin - 40, y, { align: 'right' });

    y += 7;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - margin - 40, y, { align: 'right' });

    // Horizontal line
    y += 10;
    doc.setDrawColor('#888888');
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);

    // Table Headers
    y += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#0B3D91');
    const colX = [margin, 90, 130, pageWidth - margin - 10];
    doc.text('Item Description', colX[0], y);
    doc.text('Quantity', colX[1], y, { align: 'right' });
    doc.text('Unit Price (₹)', colX[2], y, { align: 'right' });
    doc.text('Subtotal (₹)', colX[3], y, { align: 'right' });

    // Table rows
    y += 6;
    doc.setDrawColor('#CCCCCC');
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);

    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#000000');

    cartItems.forEach((item) => {
      const itemName = item.name.length > 30 ? item.name.slice(0, 27) + '...' : item.name;
      doc.text(itemName, colX[0], y);
      doc.text(String(item.quantity), colX[1], y, { align: 'right' });
      doc.text(item.price.toFixed(2), colX[2], y, { align: 'right' });
      doc.text((item.price * item.quantity).toFixed(2), colX[3], y, { align: 'right' });
      y += 8;
    });

    // Bottom line before total
    y += 4;
    doc.line(margin, y, pageWidth - margin, y);

    // Total row background
    y += 10;
    doc.setFillColor('#0B3D91');
    doc.rect(margin, y - 7, pageWidth - 2 * margin, 10, 'F');

    // Total text
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#FFFFFF');
    doc.text('Total', colX[2], y, { align: 'right' });
    doc.text(totalPrice.toFixed(2), colX[3], y, { align: 'right' });

    // Footer / Thank you note
    y += 20;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#555555');
    doc.text('Thank you for your business!', margin, y);

    y += 6;
    doc.text('If you have any questions about this invoice, please contact us at support@vendorverse.com.', margin, y);

    // Save PDF
    doc.save('VendorVerse_Invoice.pdf');
  }

  return (
    <div className="relative">
      {!paid && !showSuccess && (
        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              maxLength={16}
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ''))}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-gray-700 font-medium mb-2">
                Expiry (MM/YY)
              </label>
              <input
                id="expiry"
                type="text"
                maxLength={5}
                placeholder="08/25"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                CVV
              </label>
              <input
                id="cvv"
                type="password"
                maxLength={3}
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition cursor-pointer"
          >
            Pay Now
          </button>
        </form>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-green-600 z-50 p-8 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 text-white animate-scale-fade"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <p className="mt-6 text-white text-3xl font-semibold select-none">Payment Successful</p>
        </div>
      )}

      {paid && !showSuccess && (
        <div className="text-center mt-8">
          <button
            onClick={generatePDF}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition cursor-pointer"
          >
            Download Bill (Invoice)
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleFade {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-fade {
          animation: scaleFade 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}
