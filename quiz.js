const fernet = require('fernet');
const secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');
const token = `gAAAAABcJA208va-jfo6GFMVgGOLDsg9TCEtwkvCtsLl72pIWgcDK7fO1Nx6uSWp_Em_k-c1IMLBTw-iqUrhpYHzL2K8K0AjofEn
            -j4kCFT3POx5ukQJbzZyQ-WLrJklcZTPp09xA3_kRswPBUozi0Qft3PC3YhzaO-_KKEMYXYvH1xrJHjssb-28_gEezfKW-cNb5MUG9do`;

const url = new fernet.Token({secret, token, ttl:0});
console.log(url.decode());

