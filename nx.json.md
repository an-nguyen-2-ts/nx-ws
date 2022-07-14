***implicitDependencies*** defined phụ thuộc của các lib/apps bên trong nx workspace, only 1 `package.json`, trong monorepo thì nên có duy nhất 1 file `package.json`, nếu trong apps có package.json khác verison thì có thể xóa cái `key` này đi, còn nếu `package.json` ko khác version thì bring ra root `package.json`

---

***tasksRunnerOptions***: default config khi thực hiện 1 trong những lệnh bên trong array `cacheableOperations` thì nó sẽ caching trên nx cloud mục đích để `Distributed Computation Caching` feature của nx

---
