import leak from "./leak.json" with {type: "json"};

async function getLate(): Promise<number> {
  const link = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=jpy"
  const request = await fetch(link);
  const json = await request.json();
  const late = json.bitcoin.jpy;
  return late;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const currentLate = await getLate();
  const msgLate = "現在のビットコインレート: " + currentLate.toLocaleString() + "円\r\n" +
                  "当時のビットコインレート: " + leak.late.toLocaleString() + "円";
  
  const currentHosyo = currentLate * leak.amount;
  const leakHosyo = leak.late * leak.amount;
  const msgHosyo = "現在のレートで保証するためには " + currentHosyo.toLocaleString() + "円必要で、\r\n" +
                   "流出当時との差額は " + (currentHosyo - leakHosyo).toLocaleString() + "円";
  const msgAll = msgLate + "\r\n\r\n" + msgHosyo;
  console.log(msgAll);
}
