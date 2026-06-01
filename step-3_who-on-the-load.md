# Step 3: Who’s on the Loan – SMSF Details

## Mục đích của màn hình

Màn hình này dùng để nhập và kiểm tra thông tin về **SMSF**, **SMSF Trustee**, **Property/Bare Trust**, **Property Trustee** và **Accountant**.

Các thông tin trong màn hình này ảnh hưởng trực tiếp đến **Application** vì hệ thống cần xác định:

* Đúng bên vay trong hồ sơ **SMSF loan**
* Đúng cấu trúc pháp lý của khoản vay
* Các bên liên quan có đang hợp lệ hay không
* Hồ sơ có đủ thông tin để chuyển sang các bước tiếp theo hay không

Nếu thiếu các thông tin quan trọng ở màn hình này, **Application** có thể chưa được phép tiếp tục, hoặc có thể cần broker bổ sung thông tin trước khi submit.

---

## 1. SMSF Trust Deed

### Do you have a SMSF Trust Deed to upload?

Field này dùng để chọn broker có upload **SMSF Trust Deed** hay không.

**Ý nghĩa:**
**SMSF Trust Deed** là tài liệu quan trọng dùng để xác nhận thông tin của **SMSF Fund** và các bên liên quan.

**Ảnh hưởng đến Application:**
Nếu broker chọn upload tài liệu, hệ thống có thể dùng tài liệu này để kiểm tra và tự động điền thông tin vào hồ sơ. Nếu tài liệu chưa được upload hoặc chưa được kiểm tra thành công, **Application** có thể chưa đủ điều kiện để tiếp tục.

---

### Please upload the SMSF Trust Deed

Field này dùng để upload file **SMSF Trust Deed**.

**Ý nghĩa:**
File này là bằng chứng để hệ thống kiểm tra thông tin của **SMSF Fund**.

**Ảnh hưởng đến Application:**
Sau khi upload, hệ thống có thể validate tài liệu. Nếu tài liệu hợp lệ, một số field bên dưới có thể được tự động điền. Nếu tài liệu không hợp lệ hoặc chưa được validate, broker có thể cần upload lại hoặc nhập thông tin thủ công.

---

## 2. SMSF Fund Details

Nhóm thông tin này dùng để xác định quỹ **SMSF** nào đang tham gia vào khoản vay.

---

### SMSF ABN

Field này dùng để nhập mã số **ABN** của **SMSF Fund**.

**Ý nghĩa:**
**ABN** là mã số định danh của **SMSF Fund**. Hệ thống dùng thông tin này để nhận diện đúng quỹ trong hồ sơ.

**Ảnh hưởng đến Application:**
Nếu **SMSF ABN** bị thiếu hoặc không đúng, hệ thống có thể không xác minh được **SMSF Fund**. Điều này có thể làm **Application** bị chặn hoặc cần kiểm tra lại trước khi tiếp tục.

---

### SMSF name

Field này dùng để nhập tên của **SMSF Fund**.

**Ý nghĩa:**
Tên quỹ giúp xác định chính xác **SMSF Fund** đang đứng trong hồ sơ vay.

**Ảnh hưởng đến Application:**
Tên **SMSF Fund** cần khớp với **SMSF Trust Deed** hoặc thông tin liên quan. Nếu tên không khớp, hồ sơ có thể bị yêu cầu kiểm tra lại vì có rủi ro sai thông tin bên vay.

---

### Date fund established

Field này dùng để nhập ngày thành lập **SMSF Fund**.

**Ý nghĩa:**
Thông tin này cho biết **SMSF Fund** đã được thành lập từ khi nào.

**Ảnh hưởng đến Application:**
Ngày thành lập giúp lender hoặc hệ thống đánh giá lịch sử tồn tại của quỹ. Nếu thiếu thông tin này, hồ sơ có thể chưa hoàn chỉnh.

---

### Status

Field này thể hiện trạng thái hoạt động của **SMSF Fund**.

**Ý nghĩa:**
Trạng thái cho biết quỹ hiện có đang hoạt động hay không.

**Ảnh hưởng đến Application:**
Thông thường, **SMSF Fund** cần có trạng thái **Active** để hồ sơ có thể tiếp tục. Nếu trạng thái không phù hợp, **Application** có thể bị chặn hoặc cần broker kiểm tra lại với khách hàng.

---

### SMSF trading address

Field này dùng để nhập địa chỉ giao dịch của **SMSF Fund**.

**Ý nghĩa:**
Đây là địa chỉ dùng cho hoạt động giao dịch hoặc liên hệ của **SMSF Fund**.

**Ảnh hưởng đến Application:**
Địa chỉ này có thể được dùng để đối chiếu với tài liệu, tạo hồ sơ khách hàng, và hỗ trợ các bước xác minh sau này. Nếu địa chỉ thiếu hoặc không chính xác, broker có thể cần cập nhật trước khi tiếp tục.

---

## 3. SMSF Trustee Details

**SMSF Trustee** là bên quản lý **SMSF Fund**.

Nhóm thông tin này giúp hệ thống xác định ai có quyền đại diện hoặc quản lý quỹ trong hồ sơ vay.

---

### SMSF trustee ACN

Field này dùng để nhập mã số **ACN** của **SMSF Trustee** nếu trustee là công ty.

**Ý nghĩa:**
**ACN** là mã số định danh công ty. Field này giúp xác định đúng công ty đang giữ vai trò **SMSF Trustee**.

**Ảnh hưởng đến Application:**
Nếu **SMSF trustee ACN** bị thiếu hoặc không đúng, hệ thống có thể không xác minh được công ty trustee. Điều này có thể ảnh hưởng đến việc kiểm tra tính hợp lệ của cấu trúc vay.

---

### SMSF trustee name

Field này dùng để nhập tên của **SMSF Trustee**.

**Ý nghĩa:**
Đây là tên của bên đang quản lý **SMSF Fund**.

**Ảnh hưởng đến Application:**
Tên **SMSF Trustee** cần khớp với tài liệu hoặc thông tin đăng ký liên quan. Nếu không khớp, hồ sơ có thể bị yêu cầu chỉnh sửa hoặc kiểm tra lại.

---

### Registration date

Field này dùng để nhập ngày đăng ký của công ty **SMSF Trustee**.

**Ý nghĩa:**
Thông tin này cho biết công ty trustee được đăng ký từ khi nào.

**Ảnh hưởng đến Application:**
Ngày đăng ký giúp kiểm tra thông tin pháp lý của công ty trustee. Nếu thiếu, hồ sơ có thể chưa đủ thông tin để hoàn tất phần borrower structure.

---

### Status

Field này thể hiện trạng thái hiện tại của **SMSF Trustee**.

**Ý nghĩa:**
Trạng thái cho biết công ty trustee hiện còn hoạt động hay không.

**Ảnh hưởng đến Application:**
Thông thường, trạng thái cần là **Current**. Nếu công ty trustee không còn hợp lệ, **Application** có thể không được tiếp tục cho đến khi broker cập nhật hoặc xác minh lại thông tin.

---

### SMSF trustee registered office address

Field này dùng để nhập địa chỉ văn phòng đăng ký của **SMSF Trustee**.

**Ý nghĩa:**
Đây là địa chỉ chính thức được đăng ký cho công ty trustee.

**Ảnh hưởng đến Application:**
Field này thường là thông tin bắt buộc. Nếu thiếu địa chỉ này, hệ thống có thể không cho broker tiếp tục. Nếu địa chỉ giống với **SMSF trading address**, broker có thể tick **Tick if same as trading address** để dùng cùng địa chỉ.

---

### SMSF trustee postal address

Field này dùng để nhập địa chỉ nhận thư của **SMSF Trustee**.

**Ý nghĩa:**
Đây là địa chỉ dùng để nhận thư hoặc liên hệ với trustee.

**Ảnh hưởng đến Application:**
Nếu field này là bắt buộc mà chưa được nhập, **Application** có thể bị chặn ở bước hiện tại. Nếu địa chỉ giống với **SMSF trading address**, broker có thể tick **Tick if same as trading address**.

---

## 4. Property / Bare Trust Details

Nhóm thông tin này dùng để xác định **Property/Bare Trust** trong khoản vay **SMSF loan**.

Trong nhiều hồ sơ **SMSF loan**, **Property/Bare Trust** là cấu trúc dùng để nắm giữ tài sản liên quan đến khoản vay.

---

### Do you have a Property (Bare) Trust Deed to upload?

Field này dùng để chọn broker có upload **Property/Bare Trust Deed** hay không.

**Ý nghĩa:**
Field này xác định cách broker cung cấp thông tin về **Property/Bare Trust**: upload tài liệu hoặc nhập thủ công.

**Ảnh hưởng đến Application:**
Nếu broker chọn upload tài liệu, hệ thống có thể dùng tài liệu để kiểm tra thông tin trust. Nếu broker chọn nhập thủ công, các field liên quan đến **Property/Bare Trust** có thể cần được điền đầy đủ trước khi tiếp tục.

---

### Property trustee ACN

Field này dùng để nhập mã số **ACN** của **Property Trustee**.

**Ý nghĩa:**
**Property Trustee** là bên giữ vai trò trustee cho **Property/Bare Trust**. **ACN** giúp định danh đúng công ty trustee này.

**Ảnh hưởng đến Application:**
Nếu field này bị thiếu, hệ thống có thể hiển thị cảnh báo như **ACN required**. Khi đó, broker cần nhập **ACN** hoặc tick xác nhận rằng **ABN/ACN** chưa có tại thời điểm nộp hồ sơ. Nếu không xử lý, **Application** có thể không cho tiếp tục.

---

### Tick if ABN/ACN is not yet available during application lodgement

Checkbox này dùng khi **ABN** hoặc **ACN** của **Property Trustee** chưa có tại thời điểm nộp hồ sơ.

**Ý nghĩa:**
Broker dùng checkbox này để xác nhận rằng mã số chưa có, thay vì bỏ trống field do thiếu sót.

**Ảnh hưởng đến Application:**
Khi checkbox này được tick, hệ thống có thể cho phép broker tiếp tục mà chưa cần nhập **ABN/ACN** ngay. Tuy nhiên, thông tin này có thể vẫn cần được bổ sung ở giai đoạn sau của **Application**.

---

### Property trust name

Field này dùng để nhập tên của **Property Trust** hoặc **Bare Trust**.

**Ý nghĩa:**
Tên trust giúp xác định cấu trúc đang nắm giữ tài sản trong hồ sơ **SMSF loan**.

**Ảnh hưởng đến Application:**
Nếu broker chọn nhập thông tin thủ công, field này có thể là thông tin cần có. Nếu thiếu tên trust, hệ thống có thể xem phần **Property/Bare Trust** là chưa hoàn tất.

---

### Date fund established

Field này dùng để nhập ngày thành lập **Property/Bare Trust**.

**Ý nghĩa:**
Thông tin này cho biết **Property/Bare Trust** được thành lập từ khi nào.

**Ảnh hưởng đến Application:**
Ngày thành lập có thể được dùng để kiểm tra tính đầy đủ của hồ sơ trust. Nếu thiếu, hồ sơ có thể cần bổ sung trước khi submit hoặc trước khi qua các bước đánh giá tiếp theo.

---

## 5. Accountant Details

Nhóm thông tin này dùng để lưu thông tin **Accountant** liên quan đến **SMSF Fund**.

**Accountant** có thể được liên hệ khi cần xác nhận thông tin về quỹ, contribution, hoặc các tài liệu liên quan.

---

### Accountant firm name

Field này dùng để nhập tên công ty kế toán.

**Ý nghĩa:**
Thông tin này cho biết đơn vị kế toán nào đang hỗ trợ **SMSF Fund**.

**Ảnh hưởng đến Application:**
Field này có thể cần thiết nếu hồ sơ yêu cầu **SMSF accountant declaration** hoặc cần xác nhận thêm từ accountant.

---

### Name of accountant

Field này dùng để nhập tên người phụ trách hồ sơ từ phía **Accountant**.

**Ý nghĩa:**
Thông tin này giúp broker hoặc lender biết cần liên hệ với ai khi cần xác nhận thêm.

**Ảnh hưởng đến Application:**
Nếu hồ sơ cần xác nhận từ accountant mà thiếu tên người phụ trách, quá trình xử lý **Application** có thể bị chậm lại.

---

### Phone no.

Field này dùng để nhập số điện thoại của **Accountant**.

**Ý nghĩa:**
Đây là thông tin liên hệ khi cần trao đổi trực tiếp.

**Ảnh hưởng đến Application:**
Nếu cần xác minh thông tin gấp mà không có số điện thoại, quá trình đánh giá hồ sơ có thể mất nhiều thời gian hơn.

---

### Office address

Field này dùng để nhập địa chỉ văn phòng của **Accountant**.

**Ý nghĩa:**
Đây là địa chỉ liên hệ chính thức của accountant hoặc công ty kế toán.

**Ảnh hưởng đến Application:**
Field này có thể được dùng trong các tài liệu hoặc phần xác nhận liên quan đến accountant.

---

### Email

Field này dùng để nhập email liên hệ của **Accountant**.

**Ý nghĩa:**
Email dùng để gửi yêu cầu xác nhận, tài liệu hoặc thông tin liên quan đến hồ sơ.

**Ảnh hưởng đến Application:**
Nếu cần gửi **SMSF accountant declaration** hoặc yêu cầu xác nhận mà thiếu email, broker có thể phải bổ sung thông tin trước khi hồ sơ được xử lý tiếp.

---

## 6. Broker notes on Personal details

Field này dùng để nhập ghi chú nội bộ của broker.

**Ý nghĩa:**
Broker có thể ghi lại các thông tin cần lưu ý trong quá trình xử lý hồ sơ.

Ví dụ:

* Thông tin đang chờ khách hàng xác nhận
* Lý do chưa có **ABN/ACN**
* Ghi chú từ **Accountant**
* Ghi chú liên quan đến **SMSF Trustee** hoặc **Property/Bare Trust**

**Ảnh hưởng đến Application:**
Field này thường không chặn hồ sơ, nhưng giúp người xử lý hồ sơ hiểu rõ bối cảnh. Ghi chú tốt có thể giúp giảm việc hỏi lại thông tin và giúp **Application** được xử lý mượt hơn.

---

## Các field có thể ảnh hưởng đến việc mở bước tiếp theo

Các field dưới đây có khả năng ảnh hưởng trực tiếp đến việc broker có thể bấm **Continue** hay không:

* **SMSF Trust Deed** nếu broker chọn upload tài liệu
* Trạng thái validate của **SMSF Trust Deed**
* **SMSF ABN**
* **SMSF name**
* **SMSF status**
* **SMSF trustee ACN**
* **SMSF trustee name**
* **SMSF trustee status**
* **SMSF trustee registered office address**
* **SMSF trustee postal address**
* **Property trustee ACN**
* Checkbox **ABN/ACN is not yet available during application lodgement**
* **Property trust name**
* **Date fund established** của **Property/Bare Trust**

Nếu các field quan trọng này chưa được nhập hoặc chưa hợp lệ, **Application** có thể:

* Không cho chuyển sang bước tiếp theo
* Hiển thị warning hoặc error
* Yêu cầu broker bổ sung thông tin
* Làm chậm quá trình submit hoặc assessment
* Gây sai lệch thông tin về borrower structure

---

## Tóm tắt

Màn hình **Who’s on the Loan – SMSF Details** không chỉ dùng để nhập thông tin. Đây là bước quan trọng để xác nhận cấu trúc của hồ sơ **SMSF loan**.

Thông tin ở bước này ảnh hưởng đến:

* Việc xác định đúng bên vay
* Việc kiểm tra tính hợp lệ của **SMSF Fund**
* Việc kiểm tra **SMSF Trustee**
* Việc xác định **Property/Bare Trust**
* Việc chuẩn bị hồ sơ cho các bước tiếp theo trong **Application**

Nếu các thông tin chính bị thiếu hoặc không hợp lệ, **Application** có thể chưa được tiếp tục cho đến khi broker cập nhật đầy đủ.
