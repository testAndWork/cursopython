import pandas as pd
import matplotlib.pyplot as plt


data = pd.read_csv('auto-mpg.csv')

plt.figure()
plt.hist(data['horsepower'])
plt.show()
