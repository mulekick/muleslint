import bogus from "bogus.js";
try {
    const a = bogus(bs);
} catch (e) {
    console.error("error: ${ e.message }");
}