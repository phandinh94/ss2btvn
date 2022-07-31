

// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không

// let a = Number(prompt("Nhập số a"));
// let b = Number (prompt(" Nhập số b"));

// if (a % b === 0 && b != 0 ) {
//     console.log(`Số ${a} chia hết cho ${b}`);
    
// } else {
//     console.log(`Số ${a} không chia hết cho ${b}`);
    
// }

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó 
// không đủ điều kiện vào học lớp 10.

// let a = Number(prompt(`Nhập số tuổi của bạn`));

// if (a < 15) {
//     console.log(`Với tuổi của bạn là ${a} không đủ điều kiện vào học lớp 10`);
// }

// Bài 3: Nhập một số nguyên bất kỳ và 
// in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

//  let n = Number(prompt(`Mời bạn nhập số nguyên bất kỳ`));
//  let a = Number.isInteger(n);
//  if (a > 0) {
//     console.log(`${n} la so nguyen lon hon 0`);
//  } else if (a < 0 ) {
//     console.log(`${n} la so nguyen nho hon 0`);
//  } else {
//     console.log(`${n} la so 0`);
//  }
    
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a =Number(prompt(`Nhap so nguyen a`));
// let b = Number(prompt(`Nhap so nguyen b`));
// let c = Number(prompt(`Nhap so nguyen c`));
// if (a > b && a > c) {
//     console.log(`${a} la so nguyen co gia tri lon nhat`);
// } else if (b > a && b > c) {
//     console.log(`${b} la so nguyen co gia tri lon nhat`);
// } else {
//     console.log(`${c} la so nguyen co gia tri lon nhat`);
// }
    
// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, 
// điểm thi giữa kỳ, điểm thi cuối kỳ
// let a = Number(prompt(`diem kiem tra`));
// let b = Number(prompt(`diem giua ki`));
// let c =Number(prompt(`diem cuoi ki`));
// let D = Number(10 / 100 * a + 20 / 100 * b + 70 / 100 * c);
//  if (D >= 0 && D <= 2.9) {
//     console.log(`Hoc luc la ${D} xep hang F (Kem)`);
//  } else if (D >= 3.0 && D <= 3.9) {
//     console.log(`Hoc luc la ${D} xep hang F+ (Kem)`);
//  } else if (D >= 4.0 && D <= 4.9) {
//     console.log(`Hoc luc la ${D} xep hang D (tb yeu) `);
//  } else if (D >= 5.0 && D <= 5.4) {
//     console.log(`Hoc luc la ${D} xep hang D+ (tb yeu)`);
//  } else if (D >= 5.5 && D <= 6.9) {
//     console.log(`Hoc luc la ${D} xep hang C (tb)`);
//  } else if (D >= 7.0 && D <= 8.4) {
//     console.log(`Hoc luc la ${D} xep hang B (kha)`);
//  } else  {
//     console.log(`Hoc luc la ${D} xep hang A (Gioi)`);
//  }

// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng

//(1)
// Hoa hồng cho sản phẩm bán ra
// let a = Number(prompt(`Doanh so ban hang san pham k`));
// let b1 = Number(prompt(`gia tri phan tram hoa hong 1`));
// let b2 = Number(prompt(`gia tri phan tram hoa hong 2`));
// let b3 = Number(prompt(`gia tri phan tram hoa hong 3`));
// let x = Number(prompt(`moc doanh so nhan % (1)`));
// let y = Number(prompt(`moc doanh so nhan % (2)`));
// let z = Number(prompt(`moc doanh so nhan % (3)`));
// let h1 = Number(a * b1 / 100);
// let h2 = Number(a * b2 / 100);
// let h3 = Number(a * b3 / 100);
// if (a <= x) {
//     console.log(`Hoa hong nhan duoc là ${h1}`);
// } else if (a < x && a >= y) {
//     console.log(`Hoa hong nhan duoc là ${h2}`);
// } else {
//     console.log(`Hoa hong nhan duoc là ${h3}`);
// }
// (2) 

// let x = Number(prompt(`moc doanh so nhan % min(1)`));
// let y = Number(prompt(`moc doanh so nhan % (2)`));
// let z = Number(prompt(`moc doanh so nhan % max(3)`));
// let b1 = Number(prompt(`phan tram hoa hong theo x`));
// let b2 = Number(prompt(`phan tram hoa hong theo y`));
// let b3 = Number(prompt(`phan tram hoa hong theo z`));
// let a1 = Number(prompt(`giá tri san pham 1`));
// let a2 = Number(prompt(`giá tri san pham 2`));
// let a3 = Number(prompt(`giá tri san pham 3`));
//.....
// 
// Bài 7: Tính số cân nặng của cơ thể,
// Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe dựa trên cân nặng và chiều cao.
//  Nó được tính bằng cách lấy cân nặng đơn vị tính kilogam chia cho 
// bình phương của chiều cao đơn vị tính mét. Công thức:
// bmi = weight / ( height ^ 2 )
// Chỉ số BMI đối với người trên 20 tuổi được phân loại và diễn giải theo bảng sau:
// Ví dụ: Một người có cân nặng là 65Kg và chiều cao là 1.75m thì
// BMI là 65 / 1.752 = 22.22. Chỉ số này nằm trong khoảng 18.5 đến 25.0 
// cho nên được phân loại là Normal (bình thường).
// Khối lệnh để phân loại chỉ số cơ thể:
// + Nếu dưới 18: “Thiếu cân”
// + Nếu dưới 25: “Bình thường”
// + Nếu dưới 30 cân: “Thừa cân”
// + Còn lại: “Béo quá! Giảm cân đi”

// let m =Number(prompt(`Nhap chieu cao (m)`));
// let kg =Number(prompt(`Nhap can nang (kg)`));
// let BMI =Number(kg/m**2);
// if (BMI < 18) {
//     console.log(`Thieu can`); 
// } else if (BMI >=18 && BMI < 25) {
//     console.log(`Binh thuong`);
// } else if (BMI >= 25 && BMI > 30) {
//     console.log(`Thua can`);
// } else {
//     console.log(`Giam can di`);
// }