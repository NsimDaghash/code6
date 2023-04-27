/*
Converter

Your friend have an issue with converting file sizes between B, KB, MB, GB and TB. Could you create converter that will help him?

Create class Converter that will have:

Properties:

number that represent size amount (not necessarily integer).
string that represent current unit type. Unit type can be only one of the next: 'B', 'KB', 'MB', 'GB', 'TB'
Methods:

unit: return current unit type;
size: return current size and unit as a string '19 MB' or '38.45 GB' or '7.5 TB'
toB: convert size to Bytes and unit to 'B'
toKB: convert size to Kilobytes and unit to 'KB'
toMB: convert size to Megabyte and unit to 'MB'
toGB: convert size to Gigabyte and unit to 'GB'
toTB: convert size to Terabyte and unit to 'TB'
Note, that there can be maximum 3 digits after decimal and a number should be rounded to lower digit (floor)

Example:
var file = new Converter(1, "TB");

file.toMB();

file.unit; // 'MB'
file.size; // '1048576 MB'
*/

class Converter {
  constructor(size, unit) {
    this.size = size;
    this.unit = unit;
  }

  get sizeWithUnit() {
    return `${this.size.toFixed(2)} ${this.unit}`;
  }

  toB() {
    switch (this.unit) {
      case "KB":
        this.size *= 1024;
        break;
      case "MB":
        this.size *= 1024 ** 2;
        break;
      case "GB":
        this.size *= 1024 ** 3;
        break;
      case "TB":
        this.size *= 1024 ** 4;
        break;
    }
    this.unit = "B";
  }

  toKB() {
    switch (this.unit) {
      case "B":
        this.size /= 1024;
        break;
      case "MB":
        this.size *= 1024;
        break;
      case "GB":
        this.size *= 1024 ** 2;
        break;
      case "TB":
        this.size *= 1024 ** 3;
        break;
    }
    this.unit = "KB";
  }

  toMB() {
    switch (this.unit) {
      case "B":
        this.size /= 1024 ** 2;
        break;
      case "KB":
        this.size /= 1024;
        break;
      case "GB":
        this.size *= 1024;
        break;
      case "TB":
        this.size *= 1024 ** 2;
        break;
    }
    this.unit = "MB";
  }

  toGB() {
    switch (this.unit) {
      case "B":
        this.size /= 1024 ** 3;
        break;
      case "KB":
        this.size /= 1024 ** 2;
        break;
      case "MB":
        this.size /= 1024;
        break;
      case "TB":
        this.size *= 1024;
        break;
    }
    this.unit = "GB";
  }

  toTB() {
    switch (this.unit) {
      case "B":
        this.size /= 1024 ** 4;
        break;
      case "KB":
        this.size /= 1024 ** 3;
        break;
      case "MB":
        this.size /= 1024 ** 2;
        break;
      case "GB":
        this.size /= 1024;
        break;
    }
    this.unit = "TB";
  }
}

const file = new Converter(1, "TB");

file.toB();

console.log(file.unit); // 'B'
console.log(file.size); // 1099511627776

file.toKB();

console.log(file.unit); // 'KB'
console.log(file.sizeWithUnit); // '1073741824.00 KB'

file.toMB();

console.log(file.unit); // 'MB'
console.log(file.sizeWithUnit); // '1048576.00 MB'

file.toGB();

console.log(file.unit); // 'GB'
console.log(file.sizeWithUnit); // '1024.00 GB'

file.toTB();

console.log(file.unit); // 'TB'
console.log(file.sizeWithUnit); // '1.00 TB'
