# 伪目标
.PHONY: dev pro dep-pro dep-pub build

# 运行开发环境
dev:
	flask run

# 运行生产环境
pro:
	gunicorn --config gunicorn.conf.py domain_admin.main:app

# 打包
build:
	python setup.py sdist bdist_wheel

# 发布
dep-pub:
	bash publish.sh