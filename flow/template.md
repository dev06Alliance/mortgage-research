# E2E Technical Mapping Document — Multi-step Form

## 1. Feature Overview

### Feature name

```text
Tên chức năng:
```

### Business purpose

```text
Form này dùng để:
```

### Scope phụ trách

```text
Tôi phụ trách:
- Step A:
- Step B:
```

### Out of scope

```text
Không phụ trách:
- Step trước:
- Step sau:
- Review/Submit cuối:
```

---

# 2. Step Boundary

## Tổng quan các step

| Step   | Tên step | Mục đích | Người phụ trách | Ghi chú |
| ------ | -------- | -------- | --------------- | ------- |
| Step 1 |          |          |                 |         |
| Step 2 |          |          |                 |         |
| Step 3 |          |          |                 |         |

## 2 step phụ trách

| Step   | Input từ step trước | Output sang step sau | Có save DB không? |
| ------ | ------------------- | -------------------- | ----------------- |
| Step A |                     |                      | Yes/No            |
| Step B |                     |                      | Yes/No            |

---

# 3. Frontend Mapping

## Step A

| Item               | Value |
| ------------------ | ----- |
| Component chính    |       |
| Parent component   |       |
| Route/Page         |       |
| Form state nằm ở   |       |
| Validation schema  |       |
| Next handler       |       |
| Back handler       |       |
| API client/service |       |

## Step B

| Item               | Value |
| ------------------ | ----- |
| Component chính    |       |
| Parent component   |       |
| Route/Page         |       |
| Form state nằm ở   |       |
| Validation schema  |       |
| Next handler       |       |
| Back handler       |       |
| API client/service |       |

---

# 4. Field Mapping

## Step A fields

| UI field | Frontend field name | Backend DTO field | DB table | DB column | Required? | Default value |
| -------- | ------------------- | ----------------- | -------- | --------- | --------- | ------------- |
|          |                     |                   |          |           |           |               |

## Step B fields

| UI field | Frontend field name | Backend DTO field | DB table | DB column | Required? | Default value |
| -------- | ------------------- | ----------------- | -------- | --------- | --------- | ------------- |
|          |                     |                   |          |           |           |               |

---

# 5. Conditional Field Rules

## Rule catalog

| Rule ID | Condition | UI behavior | Payload behavior | Backend behavior | DB behavior | Code location |
| ------- | --------- | ----------- | ---------------- | ---------------- | ----------- | ------------- |
| R001    |           |             |                  |                  |             |               |
| R002    |           |             |                  |                  |             |               |

## Example

| Rule ID | Condition                      | UI behavior          | Payload behavior     | Backend behavior         | DB behavior                   | Code location                                 |
| ------- | ------------------------------ | -------------------- | -------------------- | ------------------------ | ----------------------------- | --------------------------------------------- |
| R001    | employmentType = Self-employed | Show business fields | Send business object | Validate business fields | Insert/Update business_income | `EmploymentStep.tsx`, `ApplicationService.cs` |

---

# 6. API Mapping

## API list

| Purpose           | Method   | Endpoint | Called from | Request DTO | Response DTO | Notes |
| ----------------- | -------- | -------- | ----------- | ----------- | ------------ | ----- |
| Load initial data | GET      |          |             |             |              |       |
| Save Step A       | POST/PUT |          |             |             |              |       |
| Save Step B       | POST/PUT |          |             |             |              |       |
| Validate step     | POST     |          |             |             |              |       |

## Payload examples

### Step A request

```json
{

}
```

### Step A response

```json
{

}
```

### Step B request

```json
{

}
```

### Step B response

```json
{

}
```

---

# 7. Backend Flow Mapping

## Step A backend flow

```text
API endpoint:
→ Controller:
→ Request DTO:
→ Validator:
→ Service method:
→ Business rule:
→ Repository:
→ DB tables:
```

## Step B backend flow

```text
API endpoint:
→ Controller:
→ Request DTO:
→ Validator:
→ Service method:
→ Business rule:
→ Repository:
→ DB tables:
```

---

# 8. Database Mapping

## Main tables

| Table | Purpose | Written by step | Read by step | Notes |
| ----- | ------- | --------------- | ------------ | ----- |
|       |         |                 |              |       |

## Conditional DB behavior

| Condition | Insert | Update | Delete/Clear | Notes |
| --------- | ------ | ------ | ------------ | ----- |
|           |        |        |              |       |

---

# 9. Change Impact Matrix

Dùng section này để sau này khách hàng đổi yêu cầu thì biết cần sửa ở đâu.

| Change request            | Frontend cần sửa                       | Backend cần sửa         | DB cần sửa                      | Test cần sửa                  | Risk       |
| ------------------------- | -------------------------------------- | ----------------------- | ------------------------------- | ----------------------------- | ---------- |
| Thêm field mới            | Component, validation, payload builder | DTO, validator, service | Column/table nếu cần            | Unit test, API test, E2E test | Medium     |
| Đổi rule required field   | Validation schema, UI error message    | Backend validator       | Không đổi nếu chỉ validation    | Validation test               | Low        |
| Đổi logic show/hide field | Conditional rendering, watch/useEffect | Có thể không đổi        | Không đổi                       | UI test                       | Low        |
| Field A ảnh hưởng field B | onChange handler, reset logic          | Validator/business rule | Có thể clear dữ liệu cũ         | Conditional test              | Medium     |
| Thêm option dropdown      | Constants/config/API options           | Enum/lookup service     | Lookup table nếu có             | Dropdown test                 | Low/Medium |
| Đổi cách tính kết quả     | Có thể sửa preview UI                  | Service/business rule   | Có thể thêm audit/result column | Business rule test            | High       |
| Đổi payload submit        | Payload mapper/API client              | DTO/controller/service  | Có thể đổi mapping              | API contract test             | High       |
| Đổi cách lưu dữ liệu      | Ít hoặc không đổi                      | Repository/service      | Table/column/migration          | Repository/integration test   | High       |

---

# 10. Code Ownership by Requirement

| Requirement / Business rule | Frontend file | Backend file | DB object | Test file |
| --------------------------- | ------------- | ------------ | --------- | --------- |
|                             |               |              |           |           |

## Example

| Requirement / Business rule                                       | Frontend file                                | Backend file             | DB object                       | Test file                                                |
| ----------------------------------------------------------------- | -------------------------------------------- | ------------------------ | ------------------------------- | -------------------------------------------------------- |
| Nếu employmentType = Self-employed thì bắt buộc nhập businessName | `EmploymentStep.tsx`, `employment.schema.ts` | `EmploymentValidator.cs` | `business_income.business_name` | `EmploymentStep.test.tsx`, `EmploymentValidatorTests.cs` |

---

# 11. Test Scenarios

## Scenario 1 — Happy path

```text
Input:
Expected UI:
Expected payload:
Expected backend behavior:
Expected DB result:
Expected next step:
```

## Scenario 2 — Conditional path

```text
Input:
Expected UI:
Expected payload:
Expected backend behavior:
Expected DB result:
Expected next step:
```

## Scenario 3 — Change/reset behavior

```text
Input:
User changes:
Expected reset fields:
Expected payload:
Expected DB behavior:
```

---

# 12. Maintenance Notes

## Khi khách hàng yêu cầu thêm field mới

Kiểm tra các nơi sau:

```text
1. UI component của step
2. Form state/interface/type
3. Validation schema
4. Payload mapper
5. API request DTO
6. Backend validator
7. Service/business logic
8. Repository/ORM mapping
9. DB migration/table column
10. Unit/API/E2E tests
```

## Khi khách hàng đổi rule điều kiện

Kiểm tra các nơi sau:

```text
1. Conditional rendering ở frontend
2. Field reset logic
3. Frontend validation
4. Backend validation
5. Business rule trong service
6. DB clear/insert/update behavior
7. Test case liên quan đến rule đó
```

## Khi khách hàng đổi logic lưu DB

Kiểm tra các nơi sau:

```text
1. Backend service
2. Repository
3. ORM entity/model
4. Migration
5. Existing data migration
6. API response nếu frontend cần hiển thị lại dữ liệu
```

---

# 13. Open Questions

| Question | Owner | Status                | Answer |
| -------- | ----- | --------------------- | ------ |
|          |       | Open/In progress/Done |        |

---

# 14. Final E2E Summary

```text
User nhập dữ liệu ở Step A/Step B
→ Frontend validate và xử lý conditional fields
→ Frontend build payload
→ Gọi API save/validate
→ Backend nhận DTO
→ Backend validate lại business rules
→ Service xử lý logic
→ Repository lưu DB
→ API trả response
→ Frontend cập nhật state và chuyển step tiếp theo
```
