export default function FilesPage() {
  return (
    <main>
      <table>
        <tbody>
          <tr className={"mb-2"}>
            <td className={"p-2"}>
              <label className={"text-primary"} htmlFor="title">
                Название поста:
              </label>
            </td>
            <td className={"p-2"}>
              <input
                className={
                  "border-2 border-primary rounded-lg text-primary px-2 w-[300px]"
                }
                type="text"
                id="title"
                name="title"
                required
                minLength={4}
                maxLength={30}
              />
            </td>
          </tr>
          <tr>
            <td className={"p-2"}>
              <label className={"text-primary"} htmlFor="description">
                Описание:
              </label>
            </td>
            <td className={"p-2"}>
              <textarea
                className={
                  "border-2 border-primary rounded-lg text-primary px-2 w-[300px] min-h-[150px] resize-none"
                }
                id="description"
                name="description"
                required
                minLength={4}
                maxLength={150}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
