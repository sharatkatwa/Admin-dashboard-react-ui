export default function Invoice() {
  return (
    <div className="space-y-4">
      <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-white">Invoice</h1>

      <section className="rounded-sm border border-white/5 bg-[#1B2635] px-6 py-7 text-[#c3cddd]">
        <div className="max-w-[1160px] space-y-8">
          <div className="space-y-2 text-[15px] leading-7">
            <p>Hello Charles Hall,</p>
            <p>
              This is the receipt for a payment of <span className="font-semibold text-[#d7deea]">$268.00</span> (USD) you made to AdminKit Demo.
            </p>
          </div>

          <div className="grid gap-6 border-b border-white/10 pb-6 md:grid-cols-2">
            <div>
              <p className="text-[14px] text-[#95a3b6]">Payment No</p>
              <p className="text-[14px] font-semibold text-[#d7deea]">741037024</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[14px] text-[#95a3b6]">Payment Date</p>
              <p className="text-[14px] font-semibold text-[#d7deea]">June 2, 2023 - 03:45 pm</p>
            </div>
          </div>

          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-2">
            <div className="space-y-1 text-[14px] leading-7">
              <p className="text-[#95a3b6]">Client</p>
              <p className="font-semibold text-[#d7deea]">Charles Hall</p>
              <p>4183 Forest Avenue</p>
              <p>New York City</p>
              <p>10011</p>
              <p>USA</p>
              <p className="text-[#4b90ff]">chris.wood@gmail.com</p>
            </div>

            <div className="space-y-1 text-left text-[14px] leading-7 md:text-right">
              <p className="text-[#95a3b6]">Payment To</p>
              <p className="font-semibold text-[#d7deea]">AdminKit Demo LLC</p>
              <p>354 Roy Alley</p>
              <p>Denver</p>
              <p>80202</p>
              <p>USA</p>
              <p className="text-[#4b90ff]">info@adminkit.com</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 pb-2 text-[14px] font-semibold text-[#d7deea]">
              <span>Description</span>
              <span>Quantity</span>
              <span className="text-right">Amount</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span>AdminKit Demo Theme Customization</span>
              <span>2</span>
              <span className="text-right">$150.00</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span>Monthly Subscription</span>
              <span>3</span>
              <span className="text-right">$25.00</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span>Additional Service</span>
              <span>1</span>
              <span className="text-right">$100.00</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span />
              <span className="font-semibold text-[#d7deea]">Subtotal</span>
              <span className="text-right font-semibold text-[#d7deea]">$275.00</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span />
              <span className="font-semibold text-[#d7deea]">Shipping</span>
              <span className="text-right font-semibold text-[#d7deea]">$8.00</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span />
              <span className="font-semibold text-[#d7deea]">Discount</span>
              <span className="text-right font-semibold text-[#d7deea]">5%</span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-white/10 py-2 text-[14px]">
              <span />
              <span className="font-semibold text-[#d7deea]">Total</span>
              <span className="text-right font-semibold text-[#d7deea]">$268.85</span>
            </div>
          </div>

          <div className="space-y-5 pt-2 text-center">
            <p className="text-[14px]">
              <span className="font-semibold text-[#d7deea]">Extra note:</span> Please send all items at the same time to the shipping address. Thanks in advance.
            </p>

            <button className="rounded-sm bg-[#2f7df6] px-4 py-2 text-[14px] font-semibold text-white hover:bg-[#4188f7]">
              Print this receipt
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
