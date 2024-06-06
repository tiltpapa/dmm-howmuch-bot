# DMM Bitcoinは保証にいくら要るかbot
2024年5月31日13時26分(JST)ごろ、DMM Bitcoinのウォレットから4502.9BTCの不正流出が確認された[^1]。DMM Bitcoin社は顧客資産の保証をBTCで行うために資金調達している[^2]。  
当botは現レートで保証されるBTCの価格と、流出当時のレートとの差額を表示する。BTCレートは、CoinGecko Public APIを使用する。

## パラメータ
- 流出したBTC総量: 4502.9BTC
- 流出当時のBTCレート[^3]\: 10753424円/BTC


[^1]: https://bitcoin.dmm.com/news/20240531_01
[^2]: https://bitcoin.dmm.com/news/20240605_01
[^3]: 2024年5月31日13時06分(JST)ごろ、小数点以下切り捨て