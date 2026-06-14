import unittest


SkipTest = unittest.SkipTest


def assert_equal(expected, actual):
    assert expected == actual, "%r != %r" % (expected, actual)


assert_equals = assert_equal


def assert_true(value):
    assert value


def assert_false(value):
    assert not value


def assert_raises(exception, func):
    try:
        func()
    except exception:
        return
    raise AssertionError("%r was not raised" % (exception,))
