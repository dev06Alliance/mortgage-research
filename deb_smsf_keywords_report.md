# DEB SMSF — Report keyword chính trong 2 mục

**Phạm vi report:** tổng hợp các keyword/chỉ mục chính được nhắc đến trong 2 phần của DEB SMSF:

1. **Financial Position → Fund assets & liabilities → SMSF assets**
2. **Loan summary review**, đặc biệt phần **SMSF Assets and Liabilities**

> Mục tiêu của file này là dùng như tài liệu tra cứu nhanh cho broker/admin khi đọc hoặc kiểm tra hồ sơ DEB SMSF. Nội dung mang tính giải thích nghiệp vụ và thuật ngữ, không phải tư vấn tài chính, thuế hoặc pháp lý.

---

## 1. Tổng quan luồng dữ liệu giữa 2 mục

| Mục | Vai trò trong DEB SMSF | Kết quả hiển thị ở màn review |
|---|---|---|
| **Financial Position → Fund assets & liabilities** | Nơi nhập tài sản, nợ và chi phí của SMSF | Dữ liệu được tổng hợp lại trong **Loan summary review** |
| **SMSF assets** | Ghi nhận tài sản thuộc SMSF | Hiển thị trong **Summary of SMSF assets** |
| **SMSF liabilities** | Ghi nhận các khoản nợ/nghĩa vụ trả của SMSF | Hiển thị trong **Summary of SMSF liabilities** |
| **SMSF expenses** | Ghi nhận chi phí vận hành SMSF | Hiển thị trong **Summary of SMSF expenses** |
| **Loan summary review** | Màn hình kiểm tra tổng hợp trước khi tiếp tục hồ sơ | Hiển thị warning nếu thiếu thông tin hoặc thiếu PDF/evidence |

Điểm quan trọng: dữ liệu nhập ở mục **Financial Position** không chỉ để lưu thông tin, mà còn ảnh hưởng đến cảnh báo ở **Loan summary review**, ví dụ thiếu file PDF cho deposit hoặc existing mortgage.

---

# 2. Keyword chính — Financial Position / Fund assets & liabilities

## 2.1 Assets, liabilities and expenses

| Keyword | Nghĩa tiếng Việt | Ý nghĩa trong DEB SMSF |
|---|---|---|
| **Assets** | Tài sản | Các tài sản thuộc sở hữu của SMSF, ví dụ tiền mặt, investment property, cổ phiếu, khoản deposit đã trả |
| **Liabilities** | Nợ/nghĩa vụ phải trả | Các khoản vay hoặc khoản nợ của SMSF, ví dụ existing mortgage |
| **Expenses** | Chi phí | Các chi phí duy trì SMSF hoặc chi phí liên quan đến hồ sơ vay |
| **Financial Position** | Vị thế tài chính | Khu vực tổng hợp tài sản, nợ và chi phí để lender/broker đánh giá hồ sơ |
| **Fund assets & liabilities** | Tài sản và nợ của quỹ | Tên nhóm dữ liệu dùng để nhập và kiểm tra tài sản/nợ của SMSF |

---

## 2.2 SMSF assets

| Keyword | Nghĩa tiếng Việt | Diễn giải nghiệp vụ |
|---|---|---|
| **SMSF assets** | Tài sản của SMSF | Tài sản thuộc quỹ SMSF, không phải tài sản cá nhân của member |
| **Select which SMSF assets you would like to add first** | Chọn loại tài sản SMSF muốn thêm trước | Hệ thống yêu cầu chọn loại tài sản trước khi nhập chi tiết |
| **Existing Investment Property** | Bất động sản đầu tư hiện có | Dùng khi SMSF đã sở hữu một property đầu tư |
| **Savings and Investment** | Tiền tiết kiệm và khoản đầu tư | Dùng cho cash, bank account, term deposit, shares, ETF, managed funds của SMSF |
| **Deposit paid on Investment Property** | Khoản đặt cọc đã trả cho bất động sản đầu tư | Dùng khi SMSF đã trả deposit cho property đang mua |
| **Asset type** | Loại tài sản | Cột thể hiện loại tài sản đã nhập |
| **Details** | Chi tiết | Thông tin bổ sung như địa chỉ property hoặc mô tả tài sản |
| **Amount** | Số tiền/giá trị | Giá trị tài sản hoặc số tiền deposit đã trả |
| **Actions** | Thao tác | Nút để xem/sửa/xóa dòng dữ liệu đã nhập |
| **Total SMSF assets** | Tổng tài sản SMSF | Tổng cộng giá trị các tài sản SMSF đã nhập |
| **Broker notes on SMSF Asset details** | Ghi chú broker về tài sản SMSF | Ô ghi chú để broker giải thích thêm hoặc lưu ý chứng từ cần cung cấp |
| **Continue** | Tiếp tục | Chuyển sang bước kế tiếp sau khi nhập dữ liệu |

---

## 2.3 Keyword quan trọng nhất trong mục SMSF assets

### Deposit paid on Investment Property

**Ý nghĩa:** khoản tiền SMSF đã trả làm deposit cho property đầu tư.  
Khoản này thường được xem là tài sản/khoản đã trả trước của SMSF vì nó gắn với quyền mua property.

**Thông tin cần kiểm tra:**

| Nội dung cần kiểm tra | Lý do |
|---|---|
| Số tiền deposit | Phải khớp với receipt, contract hoặc bank statement |
| Địa chỉ property | Phải khớp với security/property trong hồ sơ vay |
| Nguồn tiền | Nên chứng minh tiền đi từ tài khoản SMSF |
| PDF evidence | Nếu hệ thống yêu cầu, phải upload trước khi submit/continue |

**Tài liệu thường dùng để chứng minh:**

| Evidence/PDF | Mục đích |
|---|---|
| Deposit receipt | Xác nhận deposit đã được thanh toán |
| Contract of sale | Xác nhận property và giá mua |
| SMSF bank statement | Chứng minh tiền deposit đi từ tài khoản SMSF |
| Trust account receipt | Xác nhận agent/conveyancer đã nhận tiền |

---

# 3. Keyword chính — Loan summary review

## 3.1 Loan summary review

| Keyword | Nghĩa tiếng Việt | Ý nghĩa trong DEB SMSF |
|---|---|---|
| **Loan summary review** | Màn hình kiểm tra tổng hợp hồ sơ vay | Tổng hợp dữ liệu borrower, security, income, financial position và loan details |
| **Warning** | Cảnh báo | Cho biết hồ sơ thiếu thông tin/tài liệu bắt buộc |
| **Please update** | Vui lòng cập nhật | Cần quay lại mục liên quan để bổ sung thông tin |
| **Required** | Bắt buộc | Trường hoặc tài liệu bắt buộc phải có |
| **Do you have a PDF to upload?** | Có PDF để upload không? | Hệ thống yêu cầu upload file chứng minh cho dòng dữ liệu đó |

---

## 3.2 Security warning

| Keyword | Nghĩa tiếng Việt | Diễn giải nghiệp vụ |
|---|---|---|
| **Security** | Tài sản bảo đảm | Property dùng làm tài sản bảo đảm cho khoản vay |
| **Evidence of rental income required** | Cần bằng chứng thu nhập cho thuê | Hệ thống cần chứng minh cho estimated weekly rent |
| **Rental income** | Thu nhập cho thuê | Tiền thuê dự kiến hoặc thực tế từ property |
| **Estimated weekly rent** | Tiền thuê ước tính mỗi tuần | Số tiền rent dự kiến dùng trong hồ sơ vay |

**Evidence thường cần cho rental income:**

| Tài liệu | Khi nào dùng |
|---|---|
| Lease agreement | Property đã có tenant |
| Rental statement | Có property manager quản lý |
| Rental appraisal | Property chưa cho thuê hoặc đang mua mới |
| Bank statement showing rent received | Muốn chứng minh tiền thuê đã nhận thực tế |

---

## 3.3 Borrower / SMSF entity keywords

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Borrower** | Bên vay | Trong SMSF loan, borrower có thể liên quan đến SMSF, SMSF trustee và property trustee |
| **SMSF name** | Tên quỹ SMSF | Tên chính thức của SMSF |
| **SMSF ABN** | Mã ABN của SMSF | Australian Business Number của SMSF |
| **Date established** | Ngày thành lập | Ngày SMSF được thành lập |
| **Status: Active** | Trạng thái hoạt động | SMSF đang active |
| **SMSF trading address** | Địa chỉ giao dịch của SMSF | Địa chỉ hoạt động/giao dịch |
| **SMSF trustee name** | Tên trustee của SMSF | Công ty/cá nhân quản lý SMSF |
| **SMSF trustee ACN** | Mã ACN của SMSF trustee | Australian Company Number nếu trustee là công ty |
| **Registration date** | Ngày đăng ký | Ngày đăng ký công ty trustee |
| **Status: Current** | Trạng thái hiện tại | Công ty/entity đang current |
| **Registered office address** | Địa chỉ văn phòng đăng ký | Địa chỉ chính thức trên hồ sơ công ty |
| **Postal address** | Địa chỉ nhận thư | Địa chỉ dùng để nhận thư/tài liệu |
| **Property trustee name** | Tên property trustee | Entity giữ legal title của property trong cấu trúc SMSF borrowing |
| **Property trust name** | Tên property/bare trust | Trust liên quan đến property SMSF |
| **Property trustee ACN** | ACN của property trustee | Mã công ty của property trustee |

---

## 3.4 Member details keywords

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Member Full name** | Họ tên thành viên | Member của SMSF |
| **Date of birth** | Ngày sinh | Dùng để xác định tuổi và identity |
| **Age** | Tuổi | Thông tin tuổi của member |
| **Gender** | Giới tính | Thông tin cá nhân |
| **Citizenship** | Quốc tịch | Tình trạng quốc tịch/cư trú |
| **Marital status** | Tình trạng hôn nhân | Ví dụ single, married, de facto |
| **Residential address** | Địa chỉ cư trú | Địa chỉ nhà ở của member |
| **Status at this address** | Tình trạng tại địa chỉ | Owned/renting/boarding, v.v. |
| **At this address** | Thời gian ở địa chỉ này | Số năm/tháng sống tại địa chỉ hiện tại |
| **Email** | Email | Thông tin liên hệ |
| **Mobile** | Điện thoại di động | Thông tin liên hệ |
| **Director of the fund** | Có phải director của fund/trustee không | Cần kiểm tra nếu SMSF dùng corporate trustee |
| **% shareholder** | Tỷ lệ cổ phần | Tỷ lệ sở hữu cổ phần nếu liên quan đến company trustee |

---

## 3.5 Security / property keywords

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Security address** | Địa chỉ tài sản bảo đảm | Địa chỉ property dùng để bảo đảm khoản vay |
| **House** | Nhà | Loại security/property |
| **Estimated value of property** | Giá trị property ước tính | Dùng để tính LVR và đánh giá tài sản bảo đảm |
| **Estimated weekly rent** | Tiền thuê ước tính mỗi tuần | Dùng để tính rental income |
| **Contact for valuation** | Người liên hệ định giá | Người valuer/lender có thể liên hệ khi định giá |
| **Mobile** | Số điện thoại | Số liên hệ valuation |
| **Finance date** | Ngày finance | Ngày liên quan đến điều kiện tài chính/approval |
| **Settlement date** | Ngày settlement | Ngày hoàn tất giao dịch/chuyển nhượng |
| **Property less than 50sqm** | Property nhỏ hơn 50m² | Có thể ảnh hưởng lender policy, đặc biệt với apartment/studio |

---

## 3.6 Income keywords

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Income** | Thu nhập | Nhóm thông tin thu nhập/nguồn tiền |
| **Paid as** | Hình thức thu nhập/tình trạng | Cách hệ thống ghi nhận nguồn thu hoặc tình trạng việc làm |
| **Home duties** | Nội trợ | Không phải thu nhập lao động truyền thống |
| **Retired** | Đã nghỉ hưu | Tình trạng retired |
| **Other** | Khác | Nguồn/tình trạng khác |
| **This year’s super contribution** | Đóng góp super trong năm hiện tại | Khoản tiền đã hoặc dự kiến đóng vào super/SMSF trong năm tài chính |

---

# 4. Keyword chính — SMSF Assets and Liabilities trong Loan summary review

## 4.1 Summary of SMSF assets

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **SMSF Assets and Liabilities** | Tài sản và nợ của SMSF | Khu vực tổng hợp toàn bộ financial position của SMSF |
| **Summary of SMSF assets** | Tóm tắt tài sản SMSF | Bảng tổng hợp tài sản đã nhập |
| **Asset type** | Loại tài sản | Ví dụ deposit paid, savings, investment property |
| **Details** | Chi tiết | Địa chỉ/mô tả tài sản |
| **Rental income** | Thu nhập cho thuê | Thu nhập nếu tài sản tạo ra rent |
| **Amount** | Số tiền | Giá trị asset |
| **Total SMSF assets** | Tổng tài sản SMSF | Tổng giá trị các tài sản SMSF trong hồ sơ |

---

## 4.2 Summary of SMSF liabilities

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Summary of SMSF liabilities** | Tóm tắt nợ SMSF | Bảng tổng hợp các khoản nợ hiện có của SMSF |
| **Liability** | Khoản nợ | Loại nợ/nghĩa vụ phải trả |
| **Existing Mortgage** | Khoản vay thế chấp hiện có | Mortgage hiện tại của SMSF |
| **Financial institution** | Tổ chức tài chính | Lender/ngân hàng đang giữ khoản vay |
| **Limit** | Hạn mức khoản vay | Hạn mức facility hoặc giới hạn khoản vay |
| **Repayment** | Khoản trả định kỳ | Số tiền trả nợ định kỳ |
| **To refi?** | Có refinance không? | Cho biết khoản nợ này có được đưa vào refinance hay không |
| **Amount owed** | Số tiền còn nợ | Dư nợ hiện tại |
| **Total SMSF liabilities** | Tổng nợ SMSF | Tổng cộng các khoản nợ của SMSF |

### Lưu ý nghiệp vụ về “To refi?”

Nếu **Purpose = Refinance** nhưng dòng **Existing Mortgage** lại có **To refi? = No**, cần kiểm tra lại.  
Có thể hồ sơ đang refinance khoản vay khác, hoặc trường **To refi?** đã nhập sai.

---

## 4.3 Summary of SMSF expenses

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Summary of SMSF expenses** | Tóm tắt chi phí SMSF | Bảng tổng hợp chi phí vận hành SMSF |
| **Expenses** | Chi phí | Loại chi phí |
| **Annual running cost** | Chi phí vận hành hằng năm | Chi phí kế toán, audit, admin, ASIC/company fee, tax return, v.v. |
| **Amount** | Số tiền | Giá trị chi phí |
| **Total SMSF expenses** | Tổng chi phí SMSF | Tổng chi phí vận hành SMSF |

---

## 4.4 Household expenses

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Household** | Hộ gia đình | Nhóm sinh hoạt của member/borrower |
| **No. of dependants** | Số người phụ thuộc | Người phụ thuộc tài chính |
| **Summary of Household expenses** | Tóm tắt chi phí hộ gia đình | Bảng tổng hợp chi phí sinh hoạt |
| **Total living expenses** | Tổng chi phí sinh hoạt | Chi phí sống của household |
| **Total expenses** | Tổng chi phí | Tổng chi phí household |

Lưu ý: **Household expenses** là chi phí cá nhân/hộ gia đình, khác với **SMSF expenses**, vốn là chi phí vận hành quỹ.

---

# 5. Keyword chính — Loan Details

| Keyword | Nghĩa tiếng Việt | Ý nghĩa |
|---|---|---|
| **Loan Details** | Chi tiết khoản vay | Thông tin sản phẩm vay đề xuất |
| **Solution name** | Tên sản phẩm/giải pháp vay | Ví dụ sản phẩm SMSF loan |
| **Loan amount** | Số tiền vay | Tổng khoản vay đề xuất |
| **Purpose** | Mục đích vay | Ví dụ purchase, refinance |
| **Refinance** | Tái cấp vốn | Vay mới để thay thế khoản vay hiện có |
| **Offset** | Tài khoản offset | Tài khoản giúp giảm lãi tính trên khoản vay nếu có |
| **LVR** | Loan to Value Ratio | Tỷ lệ khoản vay trên giá trị tài sản bảo đảm |
| **Term** | Thời hạn vay | Ví dụ 30 years |
| **Rate type** | Loại lãi suất | Fixed hoặc variable |
| **Variable** | Lãi suất thả nổi | Lãi suất có thể tăng/giảm theo thời gian |
| **Repayment type** | Loại trả nợ | Principal and Interest hoặc Interest Only |
| **Principal and Interest** | Trả cả gốc và lãi | Repayment gồm cả principal và interest |
| **Interest only term** | Thời hạn chỉ trả lãi | Khoảng thời gian chỉ trả interest, nếu có |
| **Next** | Tiếp theo | Tiếp tục sang bước sau |

## Công thức LVR

**LVR = Loan amount ÷ Estimated value of property × 100**

Ví dụ nếu:

- Loan amount = `$250,000`
- Estimated value of property = `$650,000`

Thì:

```text
LVR = 250,000 ÷ 650,000 × 100 = 38.46%
```

---

# 6. Mapping giữa 2 mục

| Dữ liệu nhập ở Financial Position | Xuất hiện ở Loan summary review | Warning có thể phát sinh |
|---|---|---|
| **Deposit paid on Investment Property** | **Summary of SMSF assets** | Có thể yêu cầu PDF upload |
| **Existing Mortgage** | **Summary of SMSF liabilities** | Có thể yêu cầu mortgage statement PDF |
| **Annual running cost** | **Summary of SMSF expenses** | Có thể ảnh hưởng serviceability |
| **Estimated weekly rent** | **Security / Rental income** | Có thể yêu cầu evidence of rental income |
| **Loan amount + property value** | **Loan Details / LVR** | Nếu LVR vượt policy có thể bị chặn hoặc cần review |
| **To refi?** | **Liability review** | Nếu không khớp với Purpose = Refinance thì cần kiểm tra |

---

# 7. Checklist keyword cần kiểm tra trước khi bấm Next/Continue

| Priority | Keyword/checkpoint | Cần kiểm tra gì? |
|---|---|---|
| 1 | **Warning** | Có warning nào đang chặn hồ sơ không? |
| 2 | **Required PDF upload** | Các dòng asset/liability có cần PDF không? |
| 3 | **Evidence of rental income** | Đã có lease, rental appraisal hoặc rental statement chưa? |
| 4 | **Deposit paid on Investment Property** | Số tiền, địa chỉ và evidence có khớp không? |
| 5 | **Existing Mortgage** | Dư nợ, repayment, lender và statement có đúng không? |
| 6 | **To refi?** | Có khớp với loan purpose không? |
| 7 | **Limit vs Amount owed** | Limit có hợp lý so với amount owed không? |
| 8 | **SMSF trustee / Property trustee** | Entity, ACN, status, address có đúng không? |
| 9 | **Property less than 50sqm** | Đã chọn Yes/No chưa? |
| 10 | **Finance date / Settlement date** | Có cần điền không? |
| 11 | **Annual running cost** | Có nhập đúng chi phí SMSF hằng năm không? |
| 12 | **LVR** | LVR có đúng theo loan amount và property value không? |

---

# 8. Các vấn đề thường gặp từ dữ liệu review

| Vấn đề | Keyword liên quan | Cách xử lý |
|---|---|---|
| Thiếu chứng từ deposit | Deposit paid on Investment Property / PDF upload | Upload deposit receipt, contract hoặc SMSF bank statement |
| Thiếu chứng từ mortgage | Existing Mortgage / PDF upload | Upload loan statement hoặc mortgage statement |
| Thiếu chứng minh rent | Evidence of rental income | Upload lease, rental appraisal hoặc rental statement |
| Purpose là refinance nhưng liability không marked refinance | Purpose / Refinance / To refi? | Kiểm tra lại trường To refi? |
| Limit nhỏ hơn Amount owed | Limit / Amount owed | Kiểm tra nhập sai số hoặc sai field |
| Property nhỏ hơn 50sqm chưa được xác nhận | Property less than 50sqm | Điền Yes/No theo thông tin property |
| Trustee/member information chưa khớp | SMSF trustee / Property trustee / Director | Kiểm tra lại theo trust deed, ASIC extract, SMSF documents |

---

# 9. Broker note mẫu

## 9.1 Broker note cho deposit paid

```text
SMSF has paid deposit of [amount] toward the investment property at [property address].
Evidence to be provided via deposit receipt, contract of sale and/or SMSF bank statement.
```

## 9.2 Broker note cho existing mortgage

```text
Existing SMSF mortgage with [financial institution].
Current amount owed is [amount owed] with repayment of [repayment].
Please confirm whether this liability is to be refinanced.
```

## 9.3 Broker note cho rental income

```text
Estimated weekly rental income is [weekly rent].
Evidence required via lease agreement, rental statement or rental appraisal.
```

## 9.4 Broker note cho SMSF running cost

```text
Annual SMSF running cost recorded as [amount].
This may include accounting, audit, administration and compliance costs.
```

---

# 10. Danh sách keyword cốt lõi cần nhớ

| Nhóm | Keyword cốt lõi |
|---|---|
| **Asset** | SMSF assets, Deposit paid on Investment Property, Existing Investment Property, Savings and Investment, Total SMSF assets |
| **Liability** | SMSF liabilities, Existing Mortgage, Financial institution, Limit, Repayment, To refi?, Amount owed |
| **Expense** | SMSF expenses, Annual running cost, Total SMSF expenses |
| **Security** | Security address, Estimated value of property, Estimated weekly rent, Evidence of rental income, Property less than 50sqm |
| **Borrower/entity** | SMSF name, SMSF ABN, SMSF trustee, Property trustee, Property trust, ACN, Status |
| **Member** | Member full name, Date of birth, Citizenship, Residential address, Director of the fund, % shareholder |
| **Loan** | Loan amount, Purpose, Refinance, Offset, LVR, Term, Rate type, Variable, Repayment type, Principal and Interest |
| **Review/warning** | Loan summary review, Warning, Required, Please update, PDF upload |

---

## Kết luận

Hai mục **Financial Position / Fund assets & liabilities** và **Loan summary review** liên kết trực tiếp với nhau:

- Mục **Financial Position** là nơi nhập dữ liệu gốc về assets, liabilities và expenses.
- Mục **Loan summary review** là nơi kiểm tra lại dữ liệu và hiển thị warning nếu thiếu thông tin/tài liệu.
- Các keyword quan trọng nhất cần chú ý là: **Deposit paid on Investment Property**, **Existing Mortgage**, **Evidence of rental income**, **Required PDF upload**, **To refi?**, **Annual running cost**, **LVR**, **SMSF trustee** và **Property trustee**.
