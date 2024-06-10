const fs = require("fs")
const uploadConfigs = require("../configs/uploads")
const path = require("path")

class DiskStorageDish {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfigs.TMP_FOLDER, file),
      path.resolve(uploadConfigs.UPLOADS_FOLDER_DISH, file)
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfigs.UPLOADS_FOLDER_DISH, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorageDish
