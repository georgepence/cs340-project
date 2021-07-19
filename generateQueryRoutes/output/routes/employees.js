router.get('/', async (req, res) => {
  try {
    await queryAsync(
      'select * from `Employees`'
    )
      .then(result => res.json(result));
  } catch (e) {
    console.error(e);
    res.json({"success": false});
  }
});