import { sum } from "../src/index";
import test from "ava";

test("sum should add two numbers", (t) => {
    t.is(sum(1,2), 3)
})