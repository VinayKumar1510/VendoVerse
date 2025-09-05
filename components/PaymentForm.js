'use client';

import { useState, useEffect } from 'react';
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

    // Show full-screen success
    setShowSuccess(true);

    // After 4 seconds, hide animation and show download invoice
    setTimeout(() => {
      setShowSuccess(false);
      setPaid(true);
    }, 4000);
  }

  function generatePDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    let y = 20;

    // ---------- Company Logo ----------
    const logoImg = '/logo.png'; 
    doc.addImage(logoImg, 'PNG', margin, y, 60, 60);

    // ---------- Company Header ----------
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#0B3D91');
    doc.text('VendorVerse Pvt. Ltd.', margin, y);

    y += 8;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#333');
    doc.text('123 Vendor Street, Cityname, Country', margin, y);

    y += 5;
    doc.text('Phone: +91 79887 22405 | Email: vinaysharaya1@gmail.com', margin, y);

    // ---------- Invoice Info ----------
    y += 15;
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('INVOICE', pageWidth - margin, y, { align: 'right' });

    y += 7;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - margin, y, { align: 'right' });

    // ---------- Line ----------
    y += 10;
    doc.setDrawColor('#888');
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);

    // ---------- Table Headers ----------
    y += 12;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#0B3D91');

    const colX = [margin, 90, 130, pageWidth - margin - 10];
    doc.text('Item Description', colX[0], y);
    doc.text('Quantity', colX[1], y, { align: 'right' });
    doc.text('Unit Price (₹)', colX[2], y, { align: 'right' });
    doc.text('Subtotal (₹)', colX[3], y, { align: 'right' });

    // ---------- Table Rows ----------
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#000');

    cartItems.forEach((item, index) => {
      const rowColor = index % 2 === 0 ? '#F7F7F7' : '#FFFFFF';
      doc.setFillColor(rowColor);
      doc.rect(margin, y - 5, pageWidth - 2 * margin, 8, 'F');

      const itemName = item.name.length > 35 ? item.name.slice(0, 32) + '...' : item.name;
      doc.text(itemName, colX[0], y);
      doc.text(String(item.quantity), colX[1], y, { align: 'right' });
      doc.text(item.price.toFixed(2), colX[2], y, { align: 'right' });
      doc.text((item.price * item.quantity).toFixed(2), colX[3], y, { align: 'right' });
      y += 8;
    });

    // ---------- Total ----------
    y += 4;
    doc.setFillColor('#0B3D91');
    doc.rect(margin, y - 6, pageWidth - 2 * margin, 10, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor('#FFFFFF');
    doc.text('Total', colX[2], y, { align: 'right' });
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    doc.text(totalPrice.toFixed(2), colX[3], y, { align: 'right' });

    // ---------- Footer ----------
    y += 25;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor('#555');
    doc.text('Thank you for your business!', margin, y);

    y += 6;
    doc.text(
      'If you have any questions about this invoice, please contact support@vendorverse.com.',
      margin,
      y
    );

    // ---------- Save PDF ----------
    doc.save('VendorVerse_Invoice.pdf');
  }


  return (
    <div className="relative w-full min-h-screen">
      {/* Payment Form */}
      {!paid && !showSuccess && (
        <form onSubmit={handlePayment} className="space-y-6 max-w-md mx-auto mt-8">
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
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
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

      {/* Full-screen Payment Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-[9999] bg-green-600 flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            className="w-full h-full sm:w-52 sm:h-52"
          >
            <circle
              className="stroke-white/20"
              cx="26"
              cy="26"
              r="25"
              fill="none"
              strokeWidth="4"
            />
            <path
              className="tick stroke-white"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 27l7 7 17-17"
            />
          </svg>
          <p className="mt-6 text-white text-3xl sm:text-4xl font-semibold select-none animate-scale-fade">
            Payment Successful
          </p>

          <style jsx>{`
      .tick {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: drawTick 1s ease forwards;
      }

      @keyframes drawTick {
        to {
          stroke-dashoffset: 0;
        }
      }

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
        animation: scaleFade 1s ease forwards;
      }
    `}</style>
        </div>
      )}

      {/* Download Invoice */}
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
    </div>
  );
}
