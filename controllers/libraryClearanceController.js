const { LibraryClearance, Student } = require("../models");

const index = async (req, res) => {
  try {
    const clearances = await LibraryClearance.findAll({ include: ["user"] });
    res.json(clearances);
  } catch (error) {
    res.status(500).json({ detail: "Unexpected error occued" });
    console.log(error);
  }
};

const create = async (req, res) => {
  const { studentUid } = req.params;
  try {
    const student = await Student.findOne({ where: { uuid: studentUid } });

    if (!student)
      return res.status(404).json({ detail: "User does not exist" });
    let cleared = await LibraryClearance.create({ studentId: studentId.id });
    cleared = await LibraryClearance.findOne({
      where: { id: cleared.id },
      include: "student",
    });
    res.status(401).json({
      status: "success",
      message: "You have successfully cleared your self from libray records",
      data: cleared,
    });
  } catch (error) {
    res.status(500).json({ detail: "Unexpected error occued" });
    console.log(error);
  }
};

const slefClear = async (req, res) => {
  try {
    user = req.user;
    const student = await Student.findOne({ where: { userId: user.id } });
    if (!student)
      return res.json({
        status: "error",
        detail: "Student information does not exist,Contact site admin",
      });
    let cleared = await LibraryClearance.create({ studentId: student.id });
    cleared = await LibraryClearance.findOne({
      where: { id: cleared.id },
      include: "student",
    });
    res.status(201).json({
      status: "success",
      message: "You have successfully cleared your self from libray records",
      data: cleared,
    });
  } catch (error) {
    res.status(500).json({ detail: "Unexpected error occued" });
    console.log(error);
  }
};

const remove = async (req, res) => {
  try {
    const { clearanceId } = req.params;
    const cleared = await LibraryClearance.findOne({
      where: { uuid: clearanceId },
    });
    if (!cleared)
      return res
        .status(404)
        .json({
          status: "errror",
          detail: "Library clearaane instance does not exist",
        });
    await LibraryClearance.destroy({ where: { id: cleared.id } });
    res.json({
      status: "success",
      message: "You have successfully deleted Library clearance instance",
      data: cleared,
    });
  } catch (error) {
    res.status(500).json({ detail: "Unexpected error occued" });
    console.log(error);
  }
};

module.exports = { index, slefClear, create, remove };
