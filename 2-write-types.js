ndef.write({
  records: [
    { recordType:"text", data:"Hello World" },
    { recordType:"url", data:"" },
    { recordType:"url", data:"sms:9897879245" },
    { recordType:"url", data:"tel:9897879245" },
    { recordType:"url", data:"mailto:bhattdeepak1402@gmail.com?subject=Title&body=Body" },
    { recordType:"url", data:"geo:35.698723,139.772639" },
    { recordType:"empty" }
  ]
})
.then(() => nfc.logger("Write OK"))
.catch(err => nfc.logger("ERROR - " + err.message));