export class Details {
  constructor(fname, age, Gender, contact) {
    this.fname = fname;
    this.age = age;
    this.Gender = Gender;
    this.contact = contact;
  }
  getfullname() {
    var title = this.Gender.code == "M" ? "MR." : "Mrs";
    return title + " " + this.fname;
  }
}
