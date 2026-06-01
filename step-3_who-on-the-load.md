# Step 3: Who’s on the Loan – SMSF Details

## Mục đích của màn hình

Màn hình này dùng để nhập và kiểm tra thông tin về:

- **SMSF**
- **SMSF Trustee**
- **Property/Bare Trust**
- **Property Trustee**
- **Accountant**

Những dữ liệu này ảnh hưởng trực tiếp đến **Application** vì cần xác định:

- Đúng bên vay trong hồ sơ **SMSF loan**
- Đúng cấu trúc pháp lý của khoản vay
- Các bên liên quan có hợp lệ hay không
- Hồ sơ có đủ để tiếp tục các bước sau hay không

> Nếu thiếu thông tin quan trọng, **Application** có thể chưa được phép tiếp tục hoặc broker cần bổ sung trước khi submit.

---

## 1. SMSF Trust Deed

### 1.1 Do you have a SMSF Trust Deed to upload?

**Mục đích:** xác định broker đã upload tài liệu hay chưa.

**Tại sao quan trọng:**

- SMSF Trust Deed xác nhận thông tin của **SMSF Fund** và các bên liên quan.
- Đây là căn cứ để hệ thống kiểm tra và tự động nhập dữ liệu.

**Ảnh hưởng đến Application:**

- Nếu có tài liệu, hệ thống có thể dùng để kiểm tra và tự động điền thông tin.
- Nếu chưa có hoặc chưa kiểm tra thành công, hồ sơ có thể chưa đủ điều kiện để tiếp tục.

### 1.2 Please upload the SMSF Trust Deed

**Mục đích:** upload file **SMSF Trust Deed**.

**Tại sao quan trọng:**

- Đây là bằng chứng để hệ thống xác minh thông tin quỹ.
- Giúp xác thực dữ liệu SMSF và các bên liên quan.

**Ảnh hưởng đến Application:**

- Tài liệu hợp lệ có thể kích hoạt validation tự động và tự động điền một số field.
- Nếu không hợp lệ hoặc chưa validate, broker cần upload lại hoặc nhập thủ công.

---

## 2. SMSF Fund Details

Nhóm này xác định quỹ **SMSF** tham gia khoản vay.

### 2.1 SMSF ABN

**Mục đích:** nhập mã số **ABN** của quỹ.

**Tại sao quan trọng:** ABN là định danh chính thức của SMSF.

**Ảnh hưởng đến Application:** nếu thiếu hoặc sai, hệ thống có thể không xác minh được quỹ và hồ sơ có thể bị chặn.

### 2.2 SMSF name

**Mục đích:** nhập tên quỹ.

**Tại sao quan trọng:** tên cần khớp với tài liệu và thông tin liên quan.

**Ảnh hưởng đến Application:** nếu không khớp với Trust Deed hoặc thông tin khác, hồ sơ có thể bị yêu cầu kiểm tra lại.

### 2.3 Date fund established

**Mục đích:** nhập ngày thành lập quỹ.

**Tại sao quan trọng:** giúp đánh giá lịch sử tồn tại của SMSF.

**Ảnh hưởng đến Application:** nếu thiếu, hồ sơ có thể chưa hoàn chỉnh.

### 2.4 Status

**Mục đích:** xác nhận trạng thái hoạt động của quỹ.

**Tại sao quan trọng:** quỹ thường cần ở trạng thái **Active**.

**Ảnh hưởng đến Application:** nếu trạng thái không phù hợp, hồ sơ có thể bị chặn hoặc yêu cầu xác minh lại.

### 2.5 SMSF trading address

**Mục đích:** nhập địa chỉ giao dịch của quỹ.

**Tại sao quan trọng:** địa chỉ dùng để đối chiếu, liên hệ và xác minh hồ sơ.

**Ảnh hưởng đến Application:** nếu thiếu hoặc không chính xác, broker cần cập nhật trước khi tiếp tục.

---

## 3. SMSF Trustee Details

Nhóm này xác định bên quản lý **SMSF Fund** và quyền đại diện trong hồ sơ vay.

### 3.1 SMSF trustee ACN

**Mục đích:** nhập mã số **ACN** nếu trustee là công ty.

**Tại sao quan trọng:** ACN giúp xác định chính xác công ty trustee.

**Ảnh hưởng đến Application:** nếu thiếu hoặc sai, hệ thống có thể không xác minh được công ty trustee.

### 3.2 SMSF trustee name

**Mục đích:** nhập tên tổ chức trustee.

**Tại sao quan trọng:** tên này phải trùng với tài liệu hoặc đăng ký.

**Ảnh hưởng đến Application:** nếu không khớp, hồ sơ cần chỉnh sửa hoặc kiểm tra lại.

### 3.3 Registration date

**Mục đích:** nhập ngày đăng ký của công ty trustee.

**Tại sao quan trọng:** xác minh thời điểm thành lập pháp lý.

**Ảnh hưởng đến Application:** nếu thiếu, hồ sơ có thể chưa đủ để hoàn tất phần borrower structure.

### 3.4 Status

**Mục đích:** xác nhận trạng thái hoạt động của trustee.

**Tại sao quan trọng:** thường cần là **Current**.

**Ảnh hưởng đến Application:** nếu không còn hợp lệ, hồ sơ có thể bị tạm dừng hoặc yêu cầu xác minh.

### 3.5 SMSF trustee registered office address

**Mục đích:** nhập địa chỉ văn phòng đăng ký.

**Tại sao quan trọng:** đây là địa chỉ chính thức của trustee.

**Ảnh hưởng đến Application:** thường là bắt buộc; nếu thiếu, hồ sơ có thể không tiếp tục.

### 3.6 SMSF trustee postal address

**Mục đích:** nhập địa chỉ nhận thư.

**Tại sao quan trọng:** dùng để liên hệ với trustee.

**Ảnh hưởng đến Application:** nếu bắt buộc mà thiếu, hồ sơ có thể bị chặn.

---

## 4. Property / Bare Trust Details

Nhóm này xác định **Property/Bare Trust** trong cấu trúc **SMSF loan**.

### 4.1 Do you have a Property (Bare) Trust Deed to upload?

**Mục đích:** xác định broker cung cấp thông tin bằng tài liệu hay nhập thủ công.

**Tại sao quan trọng:** GPU Trust Deed giúp hệ thống kiểm tra cấu trúc trust.

**Ảnh hưởng đến Application:** nếu upload, hệ thống có thể kiểm tra tài liệu. Nếu nhập thủ công, các trường phải điền đầy đủ.

### 4.2 Property trustee ACN

**Mục đích:** nhập mã số **ACN** của **Property Trustee**.

**Tại sao quan trọng:** ACN là định danh công ty trustee của Property/Bare Trust.

**Ảnh hưởng đến Application:** nếu thiếu, hệ thống có thể hiển thị cảnh báo và yêu cầu nhập hoặc xác nhận chưa có ABN/ACN.

### 4.3 Tick if ABN/ACN is not yet available during application lodgement

**Mục đích:** xác nhận ABN/ACN chưa có tại thời điểm nộp hồ sơ.

**Tại sao quan trọng:** tránh hiểu nhầm trường bị bỏ trống do thiếu sót.

**Ảnh hưởng đến Application:** cho phép broker tiếp tục mà chưa cần nhập ngay, nhưng thông tin vẫn cần bổ sung sau.

### 4.4 Property trust name

**Mục đích:** nhập tên **Property Trust** hoặc **Bare Trust**.

**Tại sao quan trọng:** tên trust giúp xác định cấu trúc nắm giữ tài sản.

**Ảnh hưởng đến Application:** nếu thiếu, phần Property/Bare Trust có thể được coi là chưa hoàn tất.

### 4.5 Date fund established

**Mục đích:** nhập ngày thành lập của Property/Bare Trust.

**Tại sao quan trọng:** xác nhận thời điểm trust được thiết lập.

**Ảnh hưởng đến Application:** nếu thiếu, hồ sơ có thể cần bổ sung trước khi submit hoặc đánh giá tiếp.

---

## 5. Accountant Details

Nhóm này lưu thông tin kế toán liên quan đến **SMSF Fund**.

### 5.1 Accountant firm name

**Mục đích:** nhập tên công ty kế toán.

**Tại sao quan trọng:** cho biết đơn vị hỗ trợ SMSF.

**Ảnh hưởng đến Application:** cần thiết nếu hồ sơ yêu cầu **SMSF accountant declaration** hoặc xác nhận từ kế toán.

### 5.2 Name of accountant

**Mục đích:** nhập tên người phụ trách.

**Tại sao quan trọng:** giúp broker/lender biết ai là người liên hệ.

**Ảnh hưởng đến Application:** nếu thiếu, quá trình xử lý có thể chậm lại.

### 5.3 Phone no.

**Mục đích:** nhập số điện thoại của accountant.

**Tại sao quan trọng:** dùng để liên hệ trực tiếp.

**Ảnh hưởng đến Application:** nếu không có số điện thoại, việc xác minh có thể kéo dài.

### 5.4 Office address

**Mục đích:** nhập địa chỉ văn phòng của accountant.

**Tại sao quan trọng:** địa chỉ liên hệ chính thức.

**Ảnh hưởng đến Application:** có thể dùng trong tài liệu hoặc xác nhận.

### 5.5 Email

**Mục đích:** nhập email liên hệ của accountant.

**Tại sao quan trọng:** dùng để gửi yêu cầu xác nhận hoặc tài liệu.

**Ảnh hưởng đến Application:** nếu thiếu, broker có thể phải bổ sung trước khi tiếp tục xử lý.

---

## 6. Broker notes on Personal details

**Mục đích:** nhập ghi chú nội bộ của broker.

**Tại sao quan trọng:** giúp ghi lại bối cảnh và các tình huống cần lưu ý.

**Ví dụ:**

- Thông tin chờ khách hàng xác nhận
- Lý do chưa có **ABN/ACN**
- Ghi chú từ **Accountant**
- Ghi chú liên quan đến **SMSF Trustee** hoặc **Property/Bare Trust**

**Ảnh hưởng đến Application:**

- Thường không chặn hồ sơ
- Giúp người xử lý hiểu rõ bối cảnh
- Giảm nhu cầu hỏi lại thông tin
- Giúp quá trình xử lý mượt hơn

---

## Các field có thể ảnh hưởng đến việc mở bước tiếp theo

Các field quan trọng gồm:

- **SMSF Trust Deed** (khi broker chọn upload tài liệu)
- Trạng thái validate của **SMSF Trust Deed**
- **SMSF ABN**
- **SMSF name**
- **SMSF status**
- **SMSF trustee ACN**
- **SMSF trustee name**
- **SMSF trustee status**
- **SMSF trustee registered office address**
- **SMSF trustee postal address**
- **Property trustee ACN**
- Checkbox **ABN/ACN is not yet available during application lodgement**
- **Property trust name**
- **Date fund established** của **Property/Bare Trust**

> Nếu các field này thiếu hoặc chưa hợp lệ, **Application** có thể:
>
> - Không cho chuyển sang bước tiếp theo
> - Hiển thị warning hoặc error
> - Yêu cầu broker bổ sung thông tin
> - Làm chậm quá trình submit hoặc assessment
> - Gây sai lệch thông tin về borrower structure

---

## Tóm tắt

Màn hình **Who’s on the Loan – SMSF Details** là bước quan trọng để xác nhận cấu trúc hồ sơ **SMSF loan**.

Thông tin ở bước này ảnh hưởng đến:

- Việc xác định đúng bên vay
- Việc kiểm tra tính hợp lệ của **SMSF Fund**
- Việc kiểm tra **SMSF Trustee**
- Việc xác định **Property/Bare Trust**
- Việc chuẩn bị hồ sơ cho các bước tiếp theo của **Application**

> Nếu các thông tin chính thiếu hoặc không hợp lệ, **Application** có thể chưa được tiếp tục cho đến khi broker cập nhật đầy đủ.

